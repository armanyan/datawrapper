// numeral.js locale configuration
// locale : french (fr-ch)
// author : Adam Draper : https://github.com/adamwdraper

export default {
    delimiters: {
        thousands: "'",
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function(number) {
        return number === 1 ? 'er' : 'e';
    },
    currency: {
        symbol: 'CHF'
    }
};
