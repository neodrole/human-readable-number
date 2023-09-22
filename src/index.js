module.exports = function toReadable (number) {
    dozens = ['',
        '',
        'twenty',
        'thirty', 
        'forty', 
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',]

    hundred = 'hundred';

    zeroToNineteen = ['zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    stringNumber = String(number);

    lengthOfStringNumber = stringNumber.length;

    if (number < 20) {
        return zeroToNineteen[number];
    }

    if (number <100) {
        console.log (dozens[Number(stringNumber.charAt(0))])

        if (Number(stringNumber.charAt(1))==0) {
            return dozens[Number(stringNumber.charAt(0))];
        }

        return dozens[Number(stringNumber.charAt(0))] + ' ' +
            zeroToNineteen[Number(stringNumber.charAt(1))];
    }

    if (number < 1000 ) {
        hundreds = zeroToNineteen[Number(stringNumber.charAt(0))] + ' ' + hundred;

        if (stringNumber.charAt(1)==='0' && stringNumber.charAt(2)==='0') {
            return hundreds;
        }

        if (Number(stringNumber.charAt(1)+stringNumber.charAt(2)) <20 ) {
            return hundreds + ' ' + zeroToNineteen[Number(stringNumber.charAt(1)+stringNumber.charAt(2))];
        }

        dozen = dozens[Number(stringNumber.charAt(1))];
        units = zeroToNineteen[Number(stringNumber.charAt(2))];
        if (units!=='zero') {
            return hundreds + ' ' + dozen + ' ' + units;
        }
        return hundreds + ' ' + dozen;

    }

}


