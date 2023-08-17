module.exports = {
    format_date: (date, format = 'MM/DD/YYYY', locale = 'en-US') => {
        try {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);
            return formattedDate;
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid Date';
        }
    },
};