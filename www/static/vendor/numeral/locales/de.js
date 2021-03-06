// numeral.js locale configuration
// locale : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
// author : Marco Krage : https://github.com/sinky

export default {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function(number) {
        return '.';
    },
    currency: {
        symbol: '€'
    }
};
