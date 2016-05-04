var fixtures = require('../spec/fixtures.js');

var lcdNumberItems = fixtures.loadAllItems();

exports.printReceipt = function (inputs) {
    var buildsplitedstring = require('./buildSplitedString');

    var splitedString = buildsplitedstring.buildSplitedString(inputs);

    var buildprintitems = require('./buildPrintItems.js');

    var printItems = buildprintitems.buildPrintItems(splitedString, lcdNumberItems);

    var buildPrint = require('./buildPrint.js');

    var printText = buildPrint.buildPrint(printItems);

    console.log(printText);
};

