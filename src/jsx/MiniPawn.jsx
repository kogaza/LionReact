
function getMiniPawn(animal,player,selected){
  return {
    animal,
    player,
    selected,
    classes: [animal,player],
  }
}

module.exports = getMiniPawn;