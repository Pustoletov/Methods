import Character from '../app';

test('Количество символов в имени менее 2', () => {
  expect(() => {
    const result = new Character('q', 'Daemon');
    return result;
  }).toThrow(new Error('Количество символов в имени должно быть от 2 до 10'));
});

test('Количество символов в имени более 10', () => {
  expect(() => {
    const result = new Character('qwertyuiop[]', 'Daemon');
    return result;
  }).toThrow(new Error('Количество символов в имени должно быть от 2 до 10'));
});

test('Ошибка класса', () => {
  expect(() => {
    const result = new Character('qwerty', 'smith');
    return result;
  }).toThrowError(new Error('Такого класса нет'));
});
