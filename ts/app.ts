
interface ITypeofAnimal {
    id: number;
    biome: string;
    isNeedforReservoir: boolean;
    area: number;
    fodder: string;
    typeofAnimal: Type;

}
interface IAnimal   {
    id: number;
    name: string;
    age: number;
    amountOfFood: number;
    typeAnm:ITypeofAnimal;
}
interface ISettlement {
    id: number;
    name: string,
    area: number,
    reservoir: boolean;
    biome: string;
    animals: IAnimal[]
}
type Type = 'predator' | 'herbivore';

//Animals

let animal1: IAnimal = {
    id: 1,
    name: 'Animal1',
    age: 12,
    amountOfFood: 200,
    typeAnm:{
        id:1,
        biome:'savanna',
        isNeedforReservoir: false,
        area: 40,
        fodder: 'meat',
        typeofAnimal: "predator",
    }
}
let animal2: IAnimal = {
    id: 2,
    name: 'Animal2',
    age: 35,
    typeAnm:{
        id:2,
        biome:'lake',
        isNeedforReservoir: true,
        area: 30,
        fodder: 'meat',
        typeofAnimal: "predator",
    },
    amountOfFood: 300,
}
let animal3: IAnimal = {
    id: 3,
    name: 'Animal3',
    age: 65,
    typeAnm:{
        id:3,
        biome:'lake',
        isNeedforReservoir: true,
        area: 30,
        fodder: 'meat',
        typeofAnimal: "herbivore",
    },
    amountOfFood: 200,
}
let animal4: IAnimal = {
    id: 4,
    name: 'Animal4',
    age: 44,
    typeAnm:{
        id:4,
        biome:'forest',
        isNeedforReservoir: false,
        area: 15,
        fodder: 'seed',
        typeofAnimal: "herbivore",
    },
    amountOfFood: 150,
}
let animal5: IAnimal = {
    id: 5,
    name: 'Animal5',
    age: 32,
    typeAnm:{
        id:5,
        biome:'forest',
        isNeedforReservoir: false,
        area: 22,
        fodder: 'banana',
        typeofAnimal: "herbivore",
    },
    amountOfFood: 320,
}
let animal6: IAnimal = {
    id: 6,
    name: 'Animal5',
    age: 52,
    typeAnm:{
        id:5,
        biome:'forest',
        isNeedforReservoir: false,
        area: 90,
        fodder: 'meat',
        typeofAnimal: "predator",
    },
    amountOfFood: 500,
}
let animal7: IAnimal = {
    id: 7,
    name: 'Animal5',
    age: 20,
    typeAnm:{
        id:6,
        biome:'lake',
        isNeedforReservoir: true,
        area: 50,
        fodder: 'greens',
        typeofAnimal: "herbivore",
    },
    amountOfFood: 300,
}


let area1: ISettlement = {
    id: 1,
    name: '1st area',
    area: 70,
    reservoir: true,
    biome: 'lake',
    animals: []
}
let area2: ISettlement = {
    id: 2,
    name: '2nd area',
    area: 90,
    reservoir: false,
    biome: 'forest',
    animals: []

}
let area3: ISettlement = {
    id: 3,
    name: '3rd area',
    area: 80,
    reservoir: false,
    biome: 'savanna',
    animals: []

}

function placeAnimals(animal: IAnimal, area: ISettlement) {
    if (animal.typeAnm.isNeedforReservoir === area.reservoir && animal.typeAnm.biome === area.biome && animal.typeAnm.area <= area.area) {

        if (checkType(animal, area.animals)) {
           console.log(`This area is suitable for ${animal.name}.`);

            return `${animal.name} added to ${area.name}`;

        }
        else {
            return `${animal.name} wasn't added to ${area.name}`;
        }


    }
    else {
        console.log(`It is impossible to add "${animal.name}" to area with ${area.area}m area,${area.biome} biome. `);
        return 'That is why adding failed.'
    }

}
function checkType(animal: IAnimal, animals: IAnimal[]): boolean {
    for (let i = 0; i < animals.length; i++) {
        if ((animals[i].typeAnm.typeofAnimal!==animal.typeAnm.typeofAnimal)) {
            console.log(`This area is not suitable for ${animal.name},because types of animals are opposite. `);
            console.log('====================================');
            return false;
        }


    }
    animals.push(animal);
    return true;

}

console.log(placeAnimals(animal2, area1));
console.log(placeAnimals(animal5, area3));
console.log(placeAnimals(animal1, area3));
console.log(placeAnimals(animal7, area2));
console.log(placeAnimals(animal4, area2));
console.log(placeAnimals(animal6, area2));
console.log(placeAnimals(animal5, area2));


console.log('====================================');

function showAnimals(area: ISettlement) {
    console.log(`Animals in ${area.name}:`);
    area.animals.forEach(anm => {
        console.log(anm.name)
        if (area.animals.length === 0) {
            console.log("This area is empty..");

        }
        return anm.name
    })
}
showAnimals(area1);
showAnimals(area2);
showAnimals(area3);


console.log(area2.animals);
