const { DateUtilsFormatBrazilian } = require('../index');

test('Format 2021-07-24 to 24/07/2021', () => {
    const data = new Date('2021-07-24 00:00:00');
    expect(DateUtilsFormatBrazilian.mixedDateToDateString(data)).toBe('24/07/2021');
});

test('Format 2021-07-24 00:00:00.000 to 24/07/2021 00:00:00.000', () => {
    const data = new Date('2021-07-24 00:00:00.000');
    expect(DateUtilsFormatBrazilian.mixedDateToDatetimeString(data)).toBe('24/07/2021 00:00:00.000');
});
