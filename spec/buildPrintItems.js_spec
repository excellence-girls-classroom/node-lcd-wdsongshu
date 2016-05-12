var fixtures = require('./fixtures.js');

var buildPrintItems = require('../main/buildPrintItems.js');

describe('unit test', function () {
    describe('buldPrintItems test', function () {
        it('return buldPrintItems', function () {
            var lcdNumberItems = fixtures.loadAllItems();

            var splitedString = ['9', '1', '0'];

            var printItems = buildPrintItems.buildPrintItems(splitedString, lcdNumberItems);

            var expectText = [
                {
                    number: 9,
                    lcdNumber: ['._.', '|_|', '..|']
                },
                {
                    number: 1,
                    lcdNumber: ['...', '..|', '..|']
                },
                {
                    number: 0,
                    lcdNumber: ['._.', '|.|', '|_|']
                }
            ];

            expect(printItems).toEqual(expectText);
        });
    });
});