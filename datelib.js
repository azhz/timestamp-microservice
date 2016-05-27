module.exports = function (dateString, callback) {
    var checkDate = new Date(dateString);
    var dates = { unix: '', natural: ''};
    if (parseInt(dateString)) {
        dates.natural = getNaturalDate(new Date(parseInt(dateString)));
        dates.unix = dateString;
    } else if (checkDate.toString().toLowerCase() != 'invalid date') {
        dates.natural = dateString;
        dates.unix = checkDate.getTime();
    } else {
        dates.natural = null;
        dates.unix = null;
    }
    callback(null, dates);
}

/**
 * Returns natural langauge date
 */
function getNaturalDate(dateVar) {
    return months[dateVar.getMonth()]
        + ' '
        + dateVar.getDate()
        + ', '
        + dateVar.getFullYear();
}

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];