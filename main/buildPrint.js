exports.buildPrint = function (printItems) {
    var printText = '';

    for (var i = 0; i < printItems.length; i++) {
        var print = '';

        printItems.forEach(function (printItem) {
            var item = printItem.lcdNumber[i];
            if (!print) {
                print += item;
            }else {
                print += ' ' + item;
            }
        });
        printText += print + '\n';
    }

    return printText;
};
