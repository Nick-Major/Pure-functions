let magician = {
    name: 'Маг', 
    health: 47
}

function characterStatus(character) {
    if(character.health > 50) {
        return console.log('healthy');
    } else if (character.health <= 50 && character.health >= 15) {
        return console.log('wounded');
    } else if (character.health < 15) {
        return console.log('critical');
    }
}

characterStatus(magician);