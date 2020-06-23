export class DTMFValidator {
    static validate(tone, moreThanOneTone = true) {
        // Check tone type
        if (typeof tone === "string") {
            tone = tone.toUpperCase();
        }
        else if (typeof tone === "number") {
            tone = tone.toString();
        }
        else {
            DTMFValidator.generateInvalidToneError(tone);
        }
        const regex = moreThanOneTone ? /^[0-9A-D#*,]+$/i : /^[0-9A-D#*]$/i;
        // Check tone value
        if (!tone.match(regex)) {
            DTMFValidator.generateInvalidToneError(tone);
        }
        return tone;
    }
    static generateInvalidToneError(tone) {
        const toneForMsg = (!!tone && typeof tone !== "boolean" ? tone.toString().toLowerCase() : tone);
        throw new TypeError(`Invalid tone(s): ${toneForMsg}`);
    }
}
