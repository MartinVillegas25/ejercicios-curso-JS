//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contarLetras(a){
    if(typeof a === 'string'){
        const caracteres = a.length;
        return caracteres;
    }else{
        console.log("esto no es un string");
    }    
}

console.log(contarLetras("hola como estas"));


//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function acortar(b, c){
    const recotada = b.substring(0,c);
    return recotada
}

console.log(acortar("hola mundo", 6));



//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function arr (d, separador){
    const separacion = d.split(separador);
    return separacion
}

console.log(arr("hola que tal", " "));



//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetir(cadena, veces){
    const repeticion = cadena.repeat(veces);
    return repeticion
}

console.log(repetir('hola mundo ', 3));

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertir(palabra){
   let largo = palabra.length
   for(let j=largo; j>=0; j--){
    let newPalabra3 = palabra.charAt(j);
    console.log(newPalabra3);     
}
}

console.log(invertir("hola mundo"));



//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
        function contar(sentence, word){
        let i=0;
        let contador = 0;
            while(i!==-1){
                i = sentence.indexOf(word, i);
                if(i!==-1){
                    i++;
                    contador++;
                } 
            }
            
            return contador;
        }

     

        console.log(contar("hola como estas hola hola ", "hola"));

    


//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function palindromo(X){
    const alreves = X.split("").reverse().join("");
    console.log(alreves)
    if (X === alreves){
        console.log(true)
    }else{
        console.log("la palabra no es palindroma");
    }
    
    
}

palindromo("salas");




//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5

function reemplazar(cadena, reemplazo){
    const cadenafinal = cadena.replaceAll(reemplazo, "");
    return cadenafinal;
}

console.log(reemplazar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function getRandom (min, max){
    return Math.random() * (max-min) + min; 
}

console.log(getRandom(501, 600));



//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function invertirDigitos(numero){ 
  let invertido = 0
  let resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )
    return invertido;
  
}

function comparar(numero){
    if(invertirDigitos(numero)=== numero){
        console.log("es capicua")
    }else{
        console.log("no es capicua");
    }
    
}

comparar(5315);


//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factoria(numero){
    let num = numero;
    let factorizado= 1
    let i = 0;
    if(num>0){
        do{
          numbers = num - i
          factorizado = factorizado * numbers;        
          i++ 
        }while(i<num){
            return factorizado
        }
    }else{
        console.log("debe ingresar un numero posivito");
    }
}

console.log(factoria(4));

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function primo(numero){
    let number = numero;
    for(let i =2; i<number; i++){
        if(number % i ==0){
            return false
        }else{
            console.log(true);
        }
    }
}

console.log(primo(7));

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function par(numero){
    if(numero % 2 == 0){
        console.log(`${numero} es un numero par`)
    }else{
        console.log(`${numero} es un numero impar`)
    }
}

console.log(par(14));


//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function temperatura(grados, unidades){
    if(unidades === "C"){
        const temp = grados* 1.8;
        return temp +32 ;
    }else if (unidades === "F"){
        const temp1 = grados - 32;
        return temp1 * 0.55; 
    } else{
        console.log("debe colocar la temperatura en C o F")
    }
}

console.log(temperatura(0,"F"));

//15) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function cuadradoArray(arr){
   const a = arr;
   const acuadrado = a.map((v)=>{ 
    return v*v;
   });
   return acuadrado;
}

array = [1, 4, 5];
console.log(cuadradoArray(array));



//16) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

function mym(array1){
    const h = array1;
    let hordenado= h.sort();
    let menor = hordenado.shift();
    let mayor = hordenado.pop();

    console.log([menor, mayor]);

}

let prueba = [1, 4, 5, 99, -60];
mym(prueba);



/*17) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i*/




function paryimpar(numbers){
    return console.log({
        pares:  numbers.filter(number => number % 2 ==0),
        impares: numbers.filter(number => number % 2 !==0)
    });
    

}
let array2 = [1,2,3,4,5,6,7,8,9,0];

paryimpar(array2);




//18) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

function ordenar(numbers){
    return console.log({
        ascendente:  numbers.map(el =>el).sort(),
        descendentes: numbers.map(el =>el).sort().reverse()
    });
    

}
let array3 = [1,2,3,4,5,6,7,8,9,0];

ordenar(array3);






//19) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

function sinduplicados(numbers){
    return console.log({
        sinDuplicados: numbers.filter((value,index,self)=>self.indexOf(value) === index)
    });
    

}
let array4 = ["x", 10, "x", 2, "10", 10, true, true];

sinduplicados(array4);



//20) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

function promedio(arr){
    const reductor = (accumulator, currentValue) => accumulator + currentValue;
    const suma = arr.reduce(reductor);
    const longitud = arr.length;
    console.log(suma/longitud)

}

const reduccion = [9,8,7,6,5,4,3,2,1,0];
promedio(reduccion);






/* 21) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
      - Todos los datos del objeto son obligatorios.
      - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
     - Valida que el título no rebase los 100 caracteres.
      - Valida que el director no rebase los 50 caracteres.
       - Valida que el año de estreno sea un número entero de 4 dígitos.
       - Valida que el país o paises sea introducidos en forma de arreglo.
        - Valida que los géneros sean introducidos en forma de arreglo.
      - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
       - Crea un método estático que devuelva los géneros aceptados*.
      - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/



class pelicula{
    constructor({id, titulo, director, anioEstreno, pais, generos, clasificacion}){
        this.id= id,
        this.titulo = titulo,
        this.director = director, 
        this.anioEstreno = anioEstreno,
        this.pais = pais,
        this.generos = generos,
        this.clasificacion = clasificacion
        this.validarid(id);
        this.validartitulo(titulo);
        this.validardirector(director);
        this.validarpais(pais);
        this.validargenero(generos);
        this.validarclasificacion(clasificacion);
    }

    static get listaGeneros(){
        return  ["Action", "Adult", "Adventure", "Animacion" , "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game Show", "Historia" , "Horror", "Musical", "Music", "Mystery", "News", "Reality tv", "Romance"," Sci Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western" ];
    };

    static generosAceptados(){
        return console.info(`los generos aceptados son ${pelicula.listaGeneros.join(", ")}`);
    }

    validarid = (id)=> {
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
            console.log("el id debe tener 9 caracteres y los primeros dos deben ser letras")
        }
    };
    
    validartitulo = (titulo)=>{
        if(titulo.length>100){
            console.log("el titulo debe ser mas chico")
        }
    };
    
    validardirector = (director)=>{
        if(director.length>50){
            console.log("el titulo debe ser mas chico")
        }
    };
    validarpais = (pais)=>{
        if (!(pais instanceof Array)){
            console.log("el o los paises deben ser ingresados en forma de array")
        }
    };
    
    validargenero = (generos)=>{
        if (!(generos instanceof Array)){
            console.log("el genero debe ser ingresado como array")
        }for (let genero of generos) {
            if(!pelicula.listaGeneros.includes(genero)){
                console.log("no es un genero aceptado");
                pelicula.generosAceptados();
            }
        }
       
    };
    
    validarclasificacion = (clasificacion)=>{
        if(typeof clasificacion !== "number"){
            console.log("no es un numero");
        }else if(typeof clasificacion == "number")
            return (clasificacion< 0 || clasificacion > 10)
            ? console.log("el numero deber ser del 0 al 10")
            : this.clasificacion = clasificacion.toFixed(1);
        }

    informacionDetallada(){
        console.info (
            ` Ficha tecnica:
             Pelicula: ${this.titulo},
             Id : ${this.id},
             Director : ${this.director},
             AñoEstreno : ${this.anioEstreno},
             Pais : ${this.pais.join(" ")},
             Genero : ${this.generos.join(" ")},
             Clasificacion : ${this.clasificacion}`
         )
    }    
};




// constructor(id, titulo, director, anioEstreno, pais, genero, clasificacion)

// const pelicula1 = new pelicula("jj1234567","la gran muralla", "alberto gomez", 1999, ["argentina"],["Comedy"], 3);

// console.log(pelicula1);




const misPelis = [{
    id: "hs1234567",
    titulo : "Mortal Kombat"  ,
    director : "Simon McQuoid" , 
    anioEstreno : 2021 ,
    pais :["estados unidos"] ,
    generos : ["Action"] ,
    clasificacion : 3.8 
},
{
    id: "hs1234567",
    titulo : "agasfas"  ,
    director : "Simon McQuoid" , 
    anioEstreno : 2021 ,
    pais :["esasdasdos"] ,
    generos : ["Action"] ,
    clasificacion : 3.8  
},
{
    id: "hs1234567",
    titulo : "Mortal Kombat"  ,
    director : "Simon McQuoid" , 
    anioEstreno : 2021 ,
    pais :["estados unidos"] ,
    generos : ["Action"] ,
    clasificacion : 3.8 
}
]

misPelis.forEach(el =>new pelicula(el).informacionDetallada());




