// Autor: Carlos Eduardo Vijil Maldonado
// Fecha: 22/04/2024

let button_encrypt = document.getElementById('en-crypt');
let button_decrypt = document.getElementById('de-crypt');
let textarea_ingreso = document.getElementById('ingresar');
let textarea_res = document.getElementById('resultado');
let lbl_ingresar = document.getElementById('lbl-ingresar');
let button_subir = document.getElementById('subir');
let seleccion = 'en';
let resultado = "";

textarea_ingreso.addEventListener('input',function(){
    this.value = this.value.toLowerCase();
})

let encrypt = () => {
    seleccion = 'en';
    lbl_ingresar.innerHTML = 'Encriptador:';
    button_subir.innerHTML = 'Encriptar'; 
    button_encrypt.style.background = 'blue';
    button_encrypt.style.color = 'white';
    button_decrypt.style.background = 'white';
    button_decrypt.style.color = 'blue'; 
    textarea_ingreso.value = '';
    textarea_res.value = '';
}

let decrypt = () => {
    seleccion = 'de';
    lbl_ingresar.innerHTML = 'Desencriptador:';
    button_subir.innerHTML = 'Desencriptar'; 
    button_decrypt.style.background = 'blue';
    button_decrypt.style.color = 'white';
    button_encrypt.style.background = 'white';
    button_encrypt.style.color = 'blue'; 
    textarea_ingreso.value = '';
    textarea_res.value = '';
}

let proceso = () => {
    resultado = "";
    if(seleccion == "en"){
        let contenido = textarea_ingreso.value;
        for (char of contenido){
            if(char == 'a'){
                resultado += "ai"
            }
            else if(char == 'e'){
                resultado += "enter";
            }
            else if(char == 'i'){
                resultado += "imes";
            }
            else if(char == 'o'){
                resultado += "ober";
            }
            else if(char == 'u'){
                resultado += 'ufat';
            }
            else{
                resultado += char;
            }
        } 
    }
    else{
        console.log("desencriptar");
        let contenido = textarea_ingreso.value;
        let contenido_array = contenido.split('');
        for(char of contenido_array){  //cait -> ait
            resultado += char;          // c ->  ca
            if(char == 'a'){            //   ->  a {si}
                contenido_array.shift();//   ->  a t
            }
            else if(char == 'e'){
                contenido_array.shift();
                contenido_array.shift();
                contenido_array.shift();
                contenido_array.shift();
            }
            else if(char == 'i'){
                contenido_array.shift();
                contenido_array.shift();
                contenido_array.shift();
            }
            else if(char == 'o'){
                contenido_array.shift();
                contenido_array.shift();
                contenido_array.shift();
            }
            else if(char == 'u'){
                contenido_array.shift();
                contenido_array.shift();
                contenido_array.shift();
            }
        }
    }
    textarea_res.value = resultado;
    textarea_ingreso.value = '';
}

function copytoclipboard(){
    if(textarea_res.value == ''){
        alert("Lo sentimos, no se puede copiar la nada")
    }
    else{
        textarea_res.select();
        document.execCommand('copy');
        alert("El mensaje a sido copiado al portapapeles.");
    }
}

