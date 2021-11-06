var articulos = document.getElementsByClassName('article');
var enlaces = document.getElementsByClassName('news-card');


for(let i=0; i<=enlaces.length-1; i++){
    enlaces[i].addEventListener('click', cambio);
}



function cambio(){
var valor = this.id;
console.log(valor);
borrar(valor);
}

function borrar(indice){
    for(let i=0; i<=articulos.length-1; i++){
        articulos[i].classList.add('hidden');
        if(indice==i){
            articulos[i].classList.remove('hidden');
        }
    }
}

function aviso(){
    alert("Esta pagína es una version preliminar con simulación de fuincionalidades, los botones Blog y Contacto son solo ilustrativos y sus funcionalidades se añadiran posteriormente");
}