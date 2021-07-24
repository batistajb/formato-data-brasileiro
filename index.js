/**
 * Converts given value into date string in a "DD/MM/YYYY" format.
 */
function mixedDateToDateString(value) {
    if (value instanceof Date)
        return formatZerolessValue(value.getDate()) + "/" + formatZerolessValue(value.getMonth() + 1) + "/" + formatZerolessValue(value.getFullYear());

    return value;
}

/**
 * Converts given value into date object.
 */
function mixedDateToDate(mixedDate, toUtc = false, useMilliseconds = true) {
    let date = typeof mixedDate === "string" ? new Date(mixedDate) : mixedDate;

    if (toUtc)
        date = new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds()
        );

    if (!useMilliseconds)
        date.setUTCMilliseconds(0);

    return date;
}

/**
 * Converts given value into time string in a "HH:mm:ss" format.
 */
function mixedDateToTimeString(value, skipSeconds = false) {
    if (value instanceof Date)
        return formatZerolessValue(value.getHours()) +
            ":" + formatZerolessValue(value.getMinutes()) +
            (!skipSeconds ? ":" + formatZerolessValue(value.getSeconds()) : "");

    return value;
}

/**
 * Converts given value into time string in a "HH:mm:ss" format.
 */
function mixedTimeToDate(value) {
    if (typeof value === "string") {
        const [hours, minutes, seconds] = value.split(":");
        const date = new Date();
        if (hours)
            date.setHours(parseInt(hours));
        if (minutes)
            date.setMinutes(parseInt(minutes));
        if (seconds)
            date.setSeconds(parseInt(seconds));
        return date;
    }

    return value;
}

/**
 * Converts given string value with "-" separator into a "HH:mm:ss" format.
 */
function mixedTimeToString(value, skipSeconds = false) {
    value = value instanceof Date ? (value.getHours() + ":" + value.getMinutes() + (!skipSeconds ? ":" + value.getSeconds() : "")) : value;
    if (typeof value === "string") {
        return value.split(":")
            .map(v => v.length === 1 ? "0" + v : v) // append zero at beginning if we have a first-zero-less number
            .join(":");
    }

    return value;
}

/**
 * Converts given value into datetime string in a "DD/MM/YYYY HH-mm-ss" format.
 */
function mixedDateToDatetimeString(value) {
    if (typeof value === "string") {
        value = new Date(value);
    }
    if (value instanceof Date) {
        return formatZerolessValue(value.getDate()) + "/" +
            formatZerolessValue(value.getMonth() + 1) + "/" +
            formatZerolessValue(value.getFullYear()) + " " +
            formatZerolessValue(value.getHours()) + ":" +
            formatZerolessValue(value.getMinutes()) + ":" +
            formatZerolessValue(value.getSeconds()) + "." +
            formatMilliseconds(value.getMilliseconds());
    }

    return value;
}

/**
 * Converts given value into utc datetime string in a "DD-MM-YYY HH-mm-ss" format.
 */
function mixedDateToUtcDatetimeString(value) {
    if (typeof value === "string") {
        value = new Date(value);
    }
    if (value instanceof Date) {
        return formatZerolessValue(value.getUTCDate()) + "/" +
            formatZerolessValue(value.getUTCMonth() + 1) + "/" +
            formatZerolessValue(value.getUTCFullYear()) + " " +
            formatZerolessValue(value.getUTCHours()) + ":" +
            formatZerolessValue(value.getUTCMinutes()) + ":" +
            formatZerolessValue(value.getUTCSeconds()) + "." +
            formatMilliseconds(value.getUTCMilliseconds());
    }

    return value;
}

/**
 * Converts each item in the given array to string joined by "," separator.
 */
function simpleArrayToString(value) {
    if (value instanceof Array) {
        return (value)
            .map(i => String(i))
            .join(",");
    }

    return value;
}

/**
 * Converts given string to simple array split by "," separator.
 */
function stringToSimpleArray(value) {
    if (value instanceof String || typeof value === "string") {
        if (value.length > 0) {
            return value.split(",");
        } else {
            return [];
        }
    }

    return value;
}

function simpleJsonToString(value) {
    return JSON.stringify(value);
}

function stringToSimpleJson(value)
{
    return typeof value === "string" ? JSON.parse(value) : value;
}


/**
 * Formats given number to "0x" format, e.g. if it is 1 then it will return "01".
 */
function formatMilliseconds(value) {
    if (value < 10) {
        return "00" + value;
    } else if (value < 100) {
        return "0" + value;
    } else {
        return String(value);
    }
}

function formatZerolessValue(value) {
    if (value < 10)
        return "0" + value;

    return String(value);
}

exports.mixedDateToDateString = mixedDateToDateString;
exports.mixedDateToDate = mixedDateToDate;
exports.mixedDateToTimeString = mixedDateToTimeString;
exports.mixedTimeToDate = mixedTimeToDate;
exports.mixedTimeToString = mixedTimeToString;
exports.mixedDateToDatetimeString = mixedDateToDatetimeString;
exports.mixedDateToUtcDatetimeString = mixedDateToUtcDatetimeString;
exports.simpleArrayToString = simpleArrayToString;
exports.stringToSimpleArray = stringToSimpleArray;
exports.simpleJsonToString = simpleJsonToString;
exports.stringToSimpleJson = stringToSimpleJson;
exports.formatZerolessValue = formatZerolessValue;
exports.formatMilliseconds = formatMilliseconds;
exports.formatZerolessValue = formatZerolessValue;