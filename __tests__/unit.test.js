// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Tests phone number validity with area code', () => {
    expect(functions.isPhoneNumber('(868)534-2902')).toBe(true);
});

test('Tests phone number validity without area code', () => {
    expect(functions.isPhoneNumber('534-2902')).toBe(true);
});

test('Tests phone number validity without parenthesis', () => {
    expect(functions.isPhoneNumber('8685342902')).toBe(false);
});

test('Tests phone number validity without dash', () => {
    expect(functions.isPhoneNumber('(868)5342902')).toBe(false);
});

test('Tests email validity with proper formatting', () => {
    expect(functions.isEmail('mvaswani@ucsd.edu')).toBe(true);
});

test('Tests email validity with number and special character', () => {
    expect(functions.isEmail('mvaswani55@ucsd.edu')).toBe(true);
});

test('Tests email validity with special character', () => {
    expect(functions.isEmail('mvaswani.!@ucsd.edu')).toBe(false);
});

test('Tests email validity without proper formatting', () => {
    expect(functions.isEmail('mvaswani-ucsd.edu')).toBe(false);
});

test('Tests password strength with 4 characters', () => {
    expect(functions.isStrongPassword('A124')).toBe(true);
});

test('Tests password strength with 10 characters and _', () => {
    expect(functions.isStrongPassword('MohakV65_V')).toBe(true);
});

test('Tests password strength with 3 chacters and special chracters other than _', () => {
    expect(functions.isStrongPassword('A@#')).toBe(false);
});

test('Tests password strength without first character being letter', () => {
    expect(functions.isStrongPassword('4Mohak')).toBe(false);
});

test('Tests date with normal format (2 chracters for month and day)', () => {
    expect(functions.isDate('12/12/2012')).toBe(true);
});

test('Tests date with 1 character for month and day', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});

test('Tests date with invalid format', () => {
    expect(functions.isDate('/22/2023')).toBe(false);
});

test('Tests date with invalid year format', () => {
    expect(functions.isDate('12/12/12')).toBe(false);
});

test('Tests HexColor with length 3', () => {
    expect(functions.isHexColor('#ABC')).toBe(true);
});

test('Tests HexColor with length 6', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Tests HexColor with invalid length', () => {
    expect(functions.isHexColor('#AAAAA')).toBe(false);
});

test('Tests HexColor with invalid hex character', () => {
    expect(functions.isHexColor('XYZ')).toBe(false);
});