import demo from '../app';

test('Test', () => {
  const someValue = 'value';
  expect(demo('value')).toBe(someValue);
});
