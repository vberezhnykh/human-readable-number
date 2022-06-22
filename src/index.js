module.exports = function toReadable (number) {
    const simpleNumerals = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    const compoundNumerals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
      'eighty', 'ninety'];
    const numberString = number.toString();

    if (number < 0) {
        return 'Negative number is not accepted';
    } else if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return simpleNumerals[number];
    } else if (number >= 20 && number < 100) {
        return (compoundNumerals[numberString[0]] + ' ' + simpleNumerals[numberString[1]]).trim();
    } else if (number >= 100 && number < 1000) {
        if (numberString[1] === '0' && numberString[2] === '0') {
            return simpleNumerals[numberString[0]] + ' hundred';
        } else {
            return (simpleNumerals[numberString[0]] + ' hundred ' + toReadable(+(numberString[1] + numberString[2]))).trim();
        }   
    } else {
        return 'Number is greater than 1000'
    }
}
