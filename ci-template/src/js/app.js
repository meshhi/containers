import Team from "./Team";
import Character from "./Character";

const person1 = new Character('jogn', 20);
const person2 = new Character('jogn', 20);
const person3 = new Character('davi', 12);

const person5 = new Character('112', 123);
const person6 = new Character('12', 234);

const team = new Team();

team.add(person1);
team.add(person3);
// team.add(person2);
team.info();

team.addAll(person1, person2, person3);
team.info();

team.addAll(person5, person6);
team.info();

console.log(team.toArray());