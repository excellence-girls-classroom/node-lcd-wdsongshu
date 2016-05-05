var fixtures = require('../spec/fixtures.js');

var lcdNumberItems = fixtures.loadAllItems();

exports.printReceipt = function (inputs) {
    var buildSplitedString = require('./buildSplitedString');

    var buildPrintItems = require('./buildPrintItems.js');

    var buildPrint = require('./buildPrint.js');

    var splitedString = buildSplitedString.buildSplitedString(inputs);

    var printItems = buildPrintItems.buildPrintItems(splitedString, lcdNumberItems);

    var printText = buildPrint.buildPrint(printItems);

    console.log(printText);
};

