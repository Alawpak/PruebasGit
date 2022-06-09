
let abcMod = ["!", "1", "2", "3", "!!", "4", "5", "6", "!!!", "7", "8", "9", "10", "11", "12", 
"!!!!", "13", "14", "15", "16", "17", "!!!!!", "18", "19", "20", "21", "22", "?", "-", "-.", 
"A", "B",  "C" ];

let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ",", ".", " ", "¿", "?", ";" ];

let phrase = "Con respecto al tiempo bien empleado en relacion con la interrupcion de la muerte, no es esencial si el tiempo fue largo o corto; y con respecto al trabajo esencial en relacion con la interrupción de la muerte, no es esencial si el trabajo estaba terminado o recien comenzado. Con respecto a lo accidental, el lapso de tiempo es el factor esencial, como ocurre con la felicidad, por ejemplo: solo el fin decide si uno ha sido feliz. Con el trabajo accesorio, que esta en el exterior, es fundamental que el trabajo este terminado. Pero la obra esencial no se define esencialmente por el tiempo y lo externo, en la medida en que la muerte es la interrupcion. La seriedad, por tanto, se convierte en el vivir de cada dia como si fuera el ultimo y tambien el primero de una larga vida, y la eleccion del trabajo que no depende de si se le concede una vida para completarlo bien o solo un breve tiempo.";
phrase = phrase.toUpperCase();

let result = [];

for(let i = 0; i < phrase.length; i++){
    for(let j = 0; j < abc.length; j++){
        if(phrase[i] == abc[j]){
            result.push(abcMod[j]);
        }
    }    
}

result = result.join(" ");

console.log(result); //ya está la frase extraida cada letra

