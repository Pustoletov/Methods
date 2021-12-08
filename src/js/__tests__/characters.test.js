import Character from '../app';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Заданный персонаж не существует', () => {
  expect(() => {
    const result = new Character('qwer', 'Fairy');
    return result;
  }).toThrow();
});
test('Создаём лучника', () => {
  const recieved = new Bowman('Lusie', 'Bowman');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
test('Создаём демона', () => {
  const recieved = new Daemon('Lusie', 'Daemon');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test('Создаём волшебника', () => {
  const recieved = new Magician('Lusie', 'Magician');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test('Создаём мечника', () => {
  const recieved = new Swordsman('Lusie', 'Swordsman');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
test('Создаём мертвеца', () => {
  const recieved = new Undead('Lusie', 'Undead');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});
test('Создаём зомби', () => {
  const recieved = new Zombie('Lusie', 'Zombie');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
