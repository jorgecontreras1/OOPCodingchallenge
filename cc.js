class Pokemon{
    constructor(name, type, attack){
        this.name = name,
        this.type = type,
        this.attack = attack
    }
    attackMove = () =>{
        console.log(`${this.name} used ${this.attack}!`)
    }
}
const pokemon1 = new Pokemon("Charzard", "Fire", "Fireball");
const pokemon2 = new Pokemon("Squirtle", "Water", "Watergun");

pokemon1.attackMove();
pokemon2.attackMove();