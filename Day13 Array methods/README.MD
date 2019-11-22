// Cria um array<br>
let animalsHouse = ["hamster", "rabbit", "cat", "dog"];<br>
let animalsFarm = new Array("cow", "pig", "horse");<br>

// une os elemento como uma string, mas, o .join() permite especificar o separador entre os elementos<br> 
console.log(animalsHouse.toString());<br>
console.log(animalsFarm.join(" * "));<br>

// Ordena os elemento do array<br>
console.log(animalsHouse.sort());<br>
console.log(animalsFarm.sort());<br>

// Adiciona um elemento ao final do Array<br>
animalsHouse.push("last element");<br>
console.log(animalsHouse);<br>
animalsFarm.push("last element");<br>
console.log(animalsFarm);<br>

// Elimina o ultimo elemento do Array<br>
console.log(animalsHouse.pop());<br>
console.log(animalsFarm.pop());<br>

// Adiciona um elemento no inicio do Array, a diferença do pop ele atua no inicio<br>
animalsHouse.unshift("first element");<br>
console.log(animalsHouse);<br>
animalsFarm.unshift("first element");<br>
console.log(animalsFarm);<br>

// Elimina o primeiro elemento do Array<br>
console.log(animalsHouse.shift());<br>
console.log(animalsFarm.shift());<br>

/* O metodo splice() adiciona e remove elementos no array, ele recebe 3 parametros, <br>
#1 Onde começar; <br>
#2 O numero de elementos a ser eliminados <br>
#3 Os elementos a ser adicionados a partir da posição dada no primeiro parametros<br>

Alem disso, se nós igualarmos o resultado a uma variavel, ele retorna um array com os elementos eliminados.<br>
Se quisermos só eliminar elementos basta com passar só os dois primeiros parametros pro metodo splice().<br>
O metodo splice modifica nosso Array.<br>
*/

let animals = animalsHouse.splice(1, 1, "rat", "spoon");<br>
console.log(animals);<br>
console.log(animalsHouse);<br>

// O metodo concat() ele concatene n array que sejam passadas como parametro, e gera um novo array<br>

let all = animalsHouse.concat(animalsFarm);<br>
console.log(all);<br>

/* o metodo slice() corta uma parte do array e cria um array novo, ele pode receber dois parametros <br>
#1 Onde começar<br>
#2 Onde parar, nesse caso o elemento nesse indice não é incluso no array de saida<br>
*/

let partAnimals = all.slice(2,6);<br>
console.log(partAnimals);<br>

// O metodo map() retorna um novo array, logo de aplicar a função que foi passada como parametro<br>

let numbers = [4, 9, 16, 25];<br>
console.log(numbers.map(Math.sqrt));<br>
