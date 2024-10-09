export let warrior = {
    name: 'Воин', 
    health: 70
}

export let magician = {
    name: 'Маг', 
    health: 47
}

export let archer = {
    name: 'Лучник', 
    health: 12
}

export function characterStatus(character) {
    if(character.health > 50) {
        return 'healthy';
    } else if (character.health <= 50 && character.health >= 15) {
        return 'wounded';
    } else if (character.health < 15) {
        return 'critical';
    }
}
