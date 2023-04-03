import Team from "./Team";
import Character from "./Character";

const person1 = new Character('jogn', 20);
const person2 = new Character('jogn', 20);
const person3 = new Character('davi', 12);

const team = new Team();

team.info();
team.add(person1);
team.add(person2);
team.add(person3);

team.info()