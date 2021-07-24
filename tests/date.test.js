const { mixedDateToDatetimeString, mixedDateToDateString} = require('../index');

test('Format 2021-07-24 to 24/07/2021', () => {
    const data = new Date('2021-07-24 00:00:00');
    expect(mixedDateToDateString(data)).toBe('24/07/2021');
});

test('Format 2021-07-24 00:00:00.000 to 24/07/2021 00:00:00.000', () => {
    const data = new Date('2021-07-24 00:00:00.000');
    expect(mixedDateToDatetimeString(data)).toBe('24/07/2021 00:00:00.000');
});
