exports.buildPrintItems = function (splitedString, lcdNumberItems) {
    var printItems = [];

    splitedString.forEach(function (splitedNumber) {
        var item = findLcdNumber(splitedNumber, lcdNumberItems);

        if (item) {
            printItems.push(item);
        }
    });

    return printItems;
};


function findLcdNumber(splitedNumber, lcdNumberItems) {
    var flag = false;

    lcdNumberItems.forEach(function (lcdNumberItem) {
        if (splitedNumber == lcdNumberItem.number) {
            flag = lcdNumberItem;
        }
    });

    return flag;
}
