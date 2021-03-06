import { Levels } from "./levels";
import { Logger } from "./logger";
/**
 * Logger.
 * @public
 */
export class LoggerFactory {
    constructor() {
        this.builtinEnabled = true;
        this._level = Levels.log;
        this.loggers = {};
        this.logger = this.getLogger("sip:loggerfactory");
    }
    get level() { return this._level; }
    set level(newLevel) {
        if (newLevel >= 0 && newLevel <= 3) {
            this._level = newLevel;
        }
        else if (newLevel > 3) {
            this._level = 3;
        }
        else if (Levels.hasOwnProperty(newLevel)) {
            this._level = newLevel;
        }
        else {
            this.logger.error("invalid 'level' parameter value: " + JSON.stringify(newLevel));
        }
    }
    get connector() {
        return this._connector;
    }
    set connector(value) {
        if (!value) {
            this._connector = undefined;
        }
        else if (typeof value === "function") {
            this._connector = value;
        }
        else {
            this.logger.error("invalid 'connector' parameter value: " + JSON.stringify(value));
        }
    }
    getLogger(category, label) {
        if (label && this.level === 3) {
            return new Logger(this, category, label);
        }
        else if (this.loggers[category]) {
            return this.loggers[category];
        }
        else {
            const logger = new Logger(this, category);
            this.loggers[category] = logger;
            return logger;
        }
    }
    genericLog(levelToLog, category, label, content) {
        if (this.level >= levelToLog) {
            if (this.builtinEnabled) {
                this.print(levelToLog, category, label, content);
            }
        }
        if (this.connector) {
            this.connector(Levels[levelToLog], category, label, content);
        }
    }
    print(levelToLog, category, label, content) {
        if (typeof content === "string") {
            const prefix = [new Date(), category];
            if (label) {
                prefix.push(label);
            }
            content = prefix.concat(content).join(" | ");
        }
        switch (levelToLog) {
            case Levels.error:
                // tslint:disable-next-line:no-console
                console.error(content);
                break;
            case Levels.warn:
                // tslint:disable-next-line:no-console
                console.warn(content);
                break;
            case Levels.log:
                // tslint:disable-next-line:no-console
                console.log(content);
                break;
            case Levels.debug:
                // tslint:disable-next-line:no-console
                console.debug(content);
                break;
            default:
                break;
        }
    }
}
