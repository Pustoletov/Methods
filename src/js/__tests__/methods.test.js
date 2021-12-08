import Character from '../app';

test('Уыеличиваем лвл персонажа с hp = 0', () => {
  const character = new Character('Lusie', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('Уыеличиваем лвл персонажа с hp > 0', () => {
  const character = new Character('Lusie', 'Bowman');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
});

test('Нанесение урона', () => {
  const character = new Character('Lusie', 'Bowman');
  character.defence = 10;
  character.damage(10);
  expect(character.health).toBe(91);
});

test('Смертельный удар', () => {
  const character = new Character('Lusie', 'Bowman');
  character.defence = 10;
  character.health = 5;
  character.damage(10);
  expect(character.health).toBe(0);
});
