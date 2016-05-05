
var main = require('../main/main.js');

describe('lcd-digits', function () {
    var inputs;

    beforeEach(function () {
        inputs = '910';
    });

    describe('integration test', function () {
        describe('print test', function () {
            it('return print', function () {

                spyOn(console, 'log');

                main.printReceipt(inputs);

                var expectText =
                        '._. ... ._.\n' +
                        '|_| ..| |.|\n' +
                        '..| ..| |_|\n'
                    ;
                expect(console.log).toHaveBeenCalledWith(expectText);
            });
        });
    });
});
