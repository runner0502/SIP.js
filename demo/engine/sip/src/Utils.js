import { C } from "./Constants";
import { Grammar } from "./core/messages/grammar";
import { URI } from "./core/messages/uri";
export var Utils;
(function (Utils) {
    function defer() {
        const deferred = {};
        deferred.promise = new Promise((resolve, reject) => {
            deferred.resolve = resolve;
            deferred.reject = reject;
        });
        return deferred;
    }
    Utils.defer = defer;
    function reducePromises(arr, val) {
        return arr.reduce((acc, fn) => {
            acc = acc.then(fn);
            return acc;
        }, Promise.resolve(val));
    }
    Utils.reducePromises = reducePromises;
    function str_utf8_length(str) {
        return encodeURIComponent(str).replace(/%[A-F\d]{2}/g, "U").length;
    }
    Utils.str_utf8_length = str_utf8_length;
    function generateFakeSDP(body) {
        if (!body) {
            return;
        }
        const start = body.indexOf("o=");
        const end = body.indexOf("\r\n", start);
        return "v=0\r\n" + body.slice(start, end) + "\r\ns=-\r\nt=0 0\r\nc=IN IP4 0.0.0.0";
    }
    Utils.generateFakeSDP = generateFakeSDP;
    function isDecimal(num) {
        const numAsNum = parseInt(num, 10);
        return !isNaN(numAsNum) && (parseFloat(num) === numAsNum);
    }
    Utils.isDecimal = isDecimal;
    function createRandomToken(size, base = 32) {
        let token = "";
        for (let i = 0; i < size; i++) {
            const r = Math.floor(Math.random() * base);
            token += r.toString(base);
        }
        return token;
    }
    Utils.createRandomToken = createRandomToken;
    function newTag() {
        // used to use the constant in UA
        return Utils.createRandomToken(10);
    }
    Utils.newTag = newTag;
    // http://stackoverflow.com/users/109538/broofa
    function newUUID() {
        const UUID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = Math.floor(Math.random() * 16);
            const v = c === "x" ? r : (r % 4 + 8);
            return v.toString(16);
        });
        return UUID;
    }
    Utils.newUUID = newUUID;
    /*
     * Normalize SIP URI.
     * NOTE: It does not allow a SIP URI without username.
     * Accepts 'sip', 'sips' and 'tel' URIs and convert them into 'sip'.
     * Detects the domain part (if given) and properly hex-escapes the user portion.
     * If the user portion has only 'tel' number symbols the user portion is clean of 'tel' visual separators.
     * @private
     * @param {String} target
     * @param {String} [domain]
     */
    function normalizeTarget(target, domain) {
        // If no target is given then raise an error.
        if (!target) {
            return;
            // If a SIP.URI instance is given then return it.
        }
        else if (target instanceof URI) {
            return target;
            // If a string is given split it by '@':
            // - Last fragment is the desired domain.
            // - Otherwise append the given domain argument.
        }
        else if (typeof target === "string") {
            const targetArray = target.split("@");
            let targetUser;
            let targetDomain;
            switch (targetArray.length) {
                case 1:
                    if (!domain) {
                        return;
                    }
                    targetUser = target;
                    targetDomain = domain;
                    break;
                case 2:
                    targetUser = targetArray[0];
                    targetDomain = targetArray[1];
                    break;
                default:
                    targetUser = targetArray.slice(0, targetArray.length - 1).join("@");
                    targetDomain = targetArray[targetArray.length - 1];
            }
            // Remove the URI scheme (if present).
            targetUser = targetUser.replace(/^(sips?|tel):/i, "");
            // Remove 'tel' visual separators if the user portion just contains 'tel' number symbols.
            if (/^[\-\.\(\)]*\+?[0-9\-\.\(\)]+$/.test(targetUser)) {
                targetUser = targetUser.replace(/[\-\.\(\)]/g, "");
            }
            // Build the complete SIP URI.
            target = C.SIP + ":" + Utils.escapeUser(targetUser) + "@" + targetDomain;
            // Finally parse the resulting URI.
            return Grammar.URIParse(target);
        }
        else {
            return;
        }
    }
    Utils.normalizeTarget = normalizeTarget;
    /*
     * Hex-escape a SIP URI user.
     * @private
     * @param {String} user
     */
    function escapeUser(user) {
        // Don't hex-escape ':' (%3A), '+' (%2B), '?' (%3F"), '/' (%2F).
        return encodeURIComponent(decodeURIComponent(user))
            .replace(/%3A/ig, ":")
            .replace(/%2B/ig, "+")
            .replace(/%3F/ig, "?")
            .replace(/%2F/ig, "/");
    }
    Utils.escapeUser = escapeUser;
    function headerize(str) {
        const exceptions = {
            "Call-Id": "Call-ID",
            "Cseq": "CSeq",
            "Min-Se": "Min-SE",
            "Rack": "RAck",
            "Rseq": "RSeq",
            "Www-Authenticate": "WWW-Authenticate",
        };
        const name = str.toLowerCase().replace(/_/g, "-").split("-");
        const parts = name.length;
        let hname = "";
        for (let part = 0; part < parts; part++) {
            if (part !== 0) {
                hname += "-";
            }
            hname += name[part].charAt(0).toUpperCase() + name[part].substring(1);
        }
        if (exceptions[hname]) {
            hname = exceptions[hname];
        }
        return hname;
    }
    Utils.headerize = headerize;
    function sipErrorCause(statusCode) {
        for (const cause in C.SIP_ERROR_CAUSES) {
            if (C.SIP_ERROR_CAUSES[cause].indexOf(statusCode) !== -1) {
                return C.causes[cause];
            }
        }
        return C.causes.SIP_FAILURE_CODE;
    }
    Utils.sipErrorCause = sipErrorCause;
    function getReasonPhrase(code, specific) {
        return specific || C.REASON_PHRASE[code] || "";
    }
    Utils.getReasonPhrase = getReasonPhrase;
    function getReasonHeaderValue(code, reason) {
        reason = Utils.getReasonPhrase(code, reason);
        return "SIP;cause=" + code + ';text="' + reason + '"';
    }
    Utils.getReasonHeaderValue = getReasonHeaderValue;
    function getCancelReason(code, reason) {
        if (code && code < 200 || code > 699) {
            throw new TypeError("Invalid statusCode: " + code);
        }
        else if (code) {
            return Utils.getReasonHeaderValue(code, reason);
        }
    }
    Utils.getCancelReason = getCancelReason;
    function buildStatusLine(code, reason) {
        // Validate code and reason values
        if (!code || (code < 100 || code > 699)) {
            throw new TypeError("Invalid statusCode: " + code);
        }
        else if (reason && typeof reason !== "string" && !(reason instanceof String)) {
            throw new TypeError("Invalid reason: " + reason);
        }
        reason = Utils.getReasonPhrase(code, reason);
        return "SIP/2.0 " + code + " " + reason + "\r\n";
    }
    Utils.buildStatusLine = buildStatusLine;
    /**
     * Create a Body given a BodyObj.
     * @param bodyObj Body Object
     */
    function fromBodyObj(bodyObj) {
        const content = bodyObj.body;
        const contentType = bodyObj.contentType;
        const contentDisposition = contentTypeToContentDisposition(contentType);
        const body = { contentDisposition, contentType, content };
        return body;
    }
    Utils.fromBodyObj = fromBodyObj;
    /**
     * Create a BodyObj given a Body.
     * @param bodyObj Body Object
     */
    function toBodyObj(body) {
        const bodyObj = {
            body: body.content,
            contentType: body.contentType
        };
        return bodyObj;
    }
    Utils.toBodyObj = toBodyObj;
    // If the Content-Disposition header field is missing, bodies of
    // Content-Type application/sdp imply the disposition "session", while
    // other content types imply "render".
    // https://tools.ietf.org/html/rfc3261#section-13.2.1
    function contentTypeToContentDisposition(contentType) {
        if (contentType === "application/sdp") {
            return "session";
        }
        else {
            return "render";
        }
    }
})(Utils || (Utils = {}));
