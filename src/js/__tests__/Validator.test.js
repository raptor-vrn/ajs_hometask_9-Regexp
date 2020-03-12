import Validator from '../Validator';

const validator = new Validator();

test('Success', () => {
    expect(validator.validateUsername('Ivan123e')).toBe(true);
});

test('Start from number', () => {
    expect(validator.validateUsername('666Ivan')).toBe(false);
});

test('Start from -', () => {
    expect(validator.validateUsername('-Ivan')).toBe(false);
});

test('Start from _', () => {
    expect(validator.validateUsername('_Ivan')).toBe(false);
});

test('End on number', () => {
    expect(validator.validateUsername('Ivan123')).toBe(false);
});

test('End on -', () => {
    expect(validator.validateUsername('Ivan123-')).toBe(false);
});

test('End on _', () => {
    expect(validator.validateUsername('Ivan123_')).toBe(false);
});

test('More then 3 numbers', () => {
    expect(validator.validateUsername('Ivan1234e')).toBe(false);
});