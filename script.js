// aqui ponemos el codigo js 

//alert(" si dio "); 

//let input = document.querySelector("input");

//const img= document.createElement('img');
//img.setAttribute("src",'')
//informacion.setAttribute(img);

const input_uno = document.querySelector("#valor");
const input_Dos = document.querySelector('#valor_dos');
const calculo = document.querySelector("#calcular_buton");
const saludo = document.querySelector("#saludo");
let cedula = document.querySelector('#cc');
//let numero_1 =Number.parseInt( document.querySelector('#n1').value);
//let numero_2 =Number.parseInt(document.querySelector("#n2").value);
let numero_1 = document.querySelector('#n1');
let numero_2 =document.querySelector("#n2");
//console.log(typeof(numero_1.value));
                                                    // revisar e investigar por que el metodo para converir de string a numeros no me da sle   NaNNa


// vamos a invocar la funcion cuando se haga un click en htlm 
                                                   // evento de submit
calculo.addEventListener("click", btnOnclik);
function btnOnclik(){

    let saludoo =   " WELCOME "+input_uno.value + " " + input_Dos.value + " " + cedula.value  + " " + " la suma de los numro es: " + numero_1.value + numero_2.value;
    saludo.innerHTML = saludoo 
    //console.log(typeof(resultado_1));
    //console.log(resultado_2)
    
}

// escuchar elementos  --->              onclick --> cuando hace click
// escuchar cuando dejan de copiar --->  onchange