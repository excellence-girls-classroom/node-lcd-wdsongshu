exports.buildPrint = function (printItems) {
    var printText = '';

    var flag = 0;

    for (var i = 0; i < printItems.length; i++) {
        var print = '';

        printItems.forEach(function (printItem) {
            var item = printItem.lcdNumber[flag];
            if (!print) {
                print += item;
            }
            else {
                print += ' ' + item;
            }
        });
        flag++;
        printText += print + '\n';
    }

    return printText;
};
