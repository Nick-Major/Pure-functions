export const warrior = {
  name: 'Воин',
  health: 70,
};

export const magician = {
  name: 'Маг',
  health: 47,
};

export const archer = {
  name: 'Лучник',
  health: 12,
};

export function characterStatus(character) {
  let healtStatus;
  if (character.health > 50) {
    healtStatus = 'healthy';
  }
  if (character.health <= 50 && character.health >= 15) {
    healtStatus = 'wounded';
  }
  if (character.health < 15) {
    healtStatus = 'critical';
  }
  return healtStatus;
}
