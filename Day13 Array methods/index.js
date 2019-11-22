// Cria um array
let animalsHouse = ["hamster", "rabbit", "cat", "dog"];
let animalsFarm = new Array("cow", "pig", "horse");

// une os elemento como uma string, mas, o .join() permite especificar o separador entre os elementos 
console.log(animalsHouse.toString());
console.log(animalsFarm.join(" * "));

// Ordena os elemento do array
console.log(animalsHouse.sort());
console.log(animalsFarm.sort());

// Adiciona um elemento ao final do Array
animalsHouse.push("last element");
console.log(animalsHouse);
animalsFarm.push("last element")
console.log(animalsFarm);

// Elimina o ultimo elemento do Array
console.log(animalsHouse.pop());
console.log(animalsFarm.pop());

// Adiciona um elemento no inicio do Array, a diferença do pop ele atua no inicio
animalsHouse.unshift("first element");
console.log(animalsHouse);
animalsFarm.unshift("first element")
console.log(animalsFarm);

// Elimina o primeiro elemento do Array
console.log(animalsHouse.shift());
console.log(animalsFarm.shift());

/* O metodo splice() adiciona e remove elementos no array, ele recebe 3 parametros, 
#1 Onde começar; 
#2 O numero de elementos a ser eliminados 
#3 Os elementos a ser adicionados a partir da posição dada no primeiro parametro<

Alem disso, se nós igualarmos o resultado a uma variavel, ele retorna um array com os elementos eliminados.
Se quisermos só eliminar elementos basta com passar só os dois primeiros parametros pro metodo splice().
O metodo splice modifica nosso Array.
*/

let animals = animalsHouse.splice(1, 1, "rat", "spoon");
console.log(animals);
console.log(animalsHouse);

// O metodo concat() ele concatene n array que sejam passadas como parametro, e gera um novo array

let all = animalsHouse.concat(animalsFarm);
console.log(all);

/* o metodo slice() corta uma parte do array e cria um array novo, ele pode receber dois parametros 
#1 Onde começar
#2 Onde parar, nesse caso o elemento nesse indice não é incluso no array de saida
*/

let partAnimals = all.slice(2,6);
console.log(partAnimals);

// O metodo map() retorna um novo array, logo de aplicar a função que foi passada como parametro

let numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));