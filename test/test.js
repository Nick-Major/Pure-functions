import {
  characterStatus, warrior, magician, archer,
} from '../src/index';

test('healthy display test', () => {
  const result = characterStatus(warrior);
  expect(result).toBe('healthy');
});

test('wounded display test', () => {
  const result = characterStatus(magician);
  expect(result).toBe('wounded');
});

test('critical display test', () => {
  const result = characterStatus(archer);
  expect(result).toBe('critical');
});
