const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Количество символов в имени должно быть от 2 до 10');
    } else {
      this.name = name;
    }
    if (arrType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Такого класса нет');
    }
    this.health = 100;
    this.level = 1;
  }
}
