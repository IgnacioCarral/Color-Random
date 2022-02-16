/* variables que contienen los colores */

const primColors = ["Yellow", "Red", "Blue"];
const secColors = ["Green", "Orange", "Purple"];
const terColors = ["#0D98BA", "#8A2BE2", "#FF5349", "#c71585", "#9ACD32", "#FFAE42"];
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/* asignamos los botones del html a una variable para manipularlos */

const primBtn = document.getElementById('prim-btn');
const secBtn = document.getElementById('sec-btn');
const terBtn = document.getElementById('ter-btn');
const hexBtn = document.getElementById('hex-btn');
const hslBtn = document.getElementById('hsl-btn');

const colorShowcase = document.querySelector(".color-showcase");

const copyBtn = document.getElementById('copy-to-clipboard-link');


/*=============================function copy to clipboard =============*/

function copyToClipboard(){
    
}

 /*========================= FUNCION QUE GENERA UN NUMERO ALEATORIO ENTRE 0 Y 360 */
function getRandomHsl(){
    let hueValue = 0;
    hueValue = Math.floor(
        Math.random() * (360 + 1)
    );
    
    let satValue = 0;
    satValue = Math.floor(
        Math.random() * (100 + 1)
    );

    let lightValue = 0;
    lightValue = Math.floor(
        Math.random() * (100 + 1)
    );

    return 'hsl(' + hueValue + ', ' + satValue + '%, ' + lightValue + '%)';  
}


/*=================================*/

function getRandomNumber(){
    console.log(Math.random() * primColors.length);
    
    return Math.floor(Math.random() * primColors.length);
}

/*=================================*/

function getRandomNumberTer(){
    return Math.floor(Math.random() * terColors.length);
}

function hexRandomNumber(){
    console.log();
    return Math.floor(Math.random() * hexColors.length);
}
/* main function. get randomnumber based in the
in the cuantity of elements in an array*/

primBtn.addEventListener('click', ()=> {//colores primarios
    /* la idea es que esta funcion obtenga un numero entre 0 
    y la cantidad que tenga el array*/
    /* modifica el css */
    var randomNumber = getRandomNumber();

    document.getElementById('color-container').style.backgroundColor = primColors[randomNumber];
    
    /*modifica el html*/
    let primName = '';
    primName = primColors[randomNumber];
    colorShowcase.textContent = primName;
});

secBtn.addEventListener('click', function(){//colores secundarios
    var randomNumber = getRandomNumber();

    document.getElementById('color-container').style.backgroundColor = secColors[randomNumber];
    
    let secName = '';
    for (let i=0;i<3;i++){
        secName = secColors[randomNumber];
        }
    colorShowcase.textContent = secName;
});

terBtn.addEventListener('click', function(){//colores terciarios
    var randomNumber = getRandomNumberTer();

    document.getElementById('color-container').style.backgroundColor = terColors[randomNumber];
    let terName = '';
    for(let i = 0; i<6;i++){
        terName = terColors[randomNumber];
    }
    colorShowcase.textContent = terName;
});

hexBtn.addEventListener('click', function(){//colores hexadecimales
    let hexHash = '#';
    for(let i = 0; i<6; i++){
        hexHash += hexColors[hexRandomNumber()]
    }
    colorShowcase.textContent = hexHash;
    document.getElementById('color-container').style.backgroundColor = hexHash;
});

hslBtn.addEventListener('click', () => {
    let hslStringComplete = getRandomHsl();
    colorShowcase.textContent = hslStringComplete;
    document.getElementById('color-container').style.backgroundColor = hslStringComplete;

    /*================================= change the color font od the text when its to dark */
    
    let hslLightValue = hslStringComplete;
    let lightValue = hslLightValue.toString().substr(13,3).replace(/\D/g,'')
    console.log(hslLightValue.substr(13,3).replace(/\D/g,''));

})


/* https://www.youtube.com/watch?v=3PHXvlpOkf4&ab_channel=freeCodeCamp.org

    minuto 12:24 quede teniendo que establecer una cosntante para cada boton
*/