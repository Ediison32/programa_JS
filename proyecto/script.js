/*  correo  */
const menuEmail = document.querySelector('.emai_nav');
//const offmenu = document.querySelector('.insert_one');
const one = document.querySelector('.insert_one');
const offmenu = () =>{
        const menuStoreStado = three.classList.contains('display');
        const menuProduct = five.classList.contains('display');
        if (!menuStoreStado){
                three.classList.add('display');
        }
        if(!menuProduct){
                five.classList.add('display');
        }
        one.classList.toggle("display");
}



/* insert_two = hamburgesa  */
const insert_fourt = document.querySelector('.insert_fourt')
const menuInfo = document.querySelector('.menu');
const two = document.querySelector('.insert_two');
const offmenuInfo =  () => {
        const menuStoreStado = three.classList.contains('display');
        const menuProduct = five.classList.contains('display');
        const musprincipal = insert_fourt.classList.contains('display');
      
      
        if(!menuStoreStado){
                three.classList.add('display');
        }
        if(!menuProduct){
                five.classList.add('display');
        }
        if(musprincipal){
                insert_fourt.classList.toggle('display');
                
        }
        if(!musprincipal){
                insert_fourt.classList.add('display');
                
        }
       /*  ofertas_container.classList.add('display'); */
        two.classList.toggle("display");
        
}



/*  insert_three  = carro */

const menuStore = document.querySelector('.car_nav');
const three = document.querySelector('.insert_three');

const offmenuStore = () => {
        const menuEmailStado = one.classList.contains("display"); // verifico si menu email esta abierto 
        const menuInfoStado = two.classList.contains('display');
        const menuProduct = five.classList.contains('display');
      
        
        if (!menuEmailStado){ // si esta false = abierton =>
                one.classList.add('display') //  lo cierra 
        }
        if (!menuInfoStado){
                two.classList.add('display');
        }
        if(!menuProduct){
                five.classList.add('display');
        }
        three.classList.toggle('display'); // y abro menu carro 
}

// si no esta abierto el menu = tru
// si esta abierto = false 

menuEmail.addEventListener('click', offmenu); 
menuInfo.addEventListener('click', offmenuInfo);
menuStore.addEventListener('click', offmenuStore)


/* ofertas  */

const clsedd = document.querySelector('.close_product');
const five = document.querySelector('.insert_five');

function offmenuOfertas() {
        
        console.log( "Juan David" +"Castro Gallego")
        const menuEmailStado = one.classList.contains("display"); // verifico si menu email esta abierto 
        const menuInfoStado = two.classList.contains('display');
        const menuStoreStado = three.classList.contains('display');
        const menuProduct = five.classList.contains('display');

        if (!menuEmailStado){ // si esta false = abierton =>
                one.classList.add('display') //  lo cierra 
        }
        if (!menuInfoStado){
                two.classList.add('display');
        }
        if(menuProduct){
                five.classList.add('display');
        }
        if(!menuStoreStado){
                three.classList.add('display');
        }
      
        five.classList.toggle('display');
}

clsedd.addEventListener('click', offmenuOfertas);





/*   crear las ofertas desde js para html  */

const listaProductos = [];

listaProductos.push({
        name: 'Analizar',
        valor: '150.000',
        img: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
})

listaProductos.push({
        name: 'Interpretar',
        valor: '250.000',
        img: 'https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

listaProductos.push({
        name: 'Gestionar',
        valor: '170.000',
        img: 'https://media.istockphoto.com/id/1466303002/photo/artificial-intelligence-technology-web-background-virtual-concept.jpg?b=1&s=612x612&w=0&k=20&c=mBHgMrUN99GcXU5C9xFwL1gtQazvAy8ufYmTiJ90YTA=',
})

listaProductos.push({
        name: 'Definir',
        valor: '100.000',
        img: 'https://images.pexels.com/photos/2691660/pexels-photo-2691660.jpeg?auto=compress&cs=tinysrgb&w=400',
})

/* vamos a crear todo la maquetacion html  */
const ofertas_container = document.querySelector('.ofertas_container');
//const section_container= document,querySelector('.section_container');
//const ofertas_container = document.querySelector('.insert_fourt');
function listOfertasProductos(arr){
        for (product of arr){
                const productos = document.createElement('div');  // crea el elemento div
                productos.classList.add('productos');             // le agrega la  clasee 'productos'
            
                const img_1 = document.createElement('img');
                img_1.setAttribute('src', product.img);    // le cambia el atributo src por el q tenemos asignado en la lista 
                img_1.classList.add('productos_img');
                img_1.addEventListener('click', offmenuOfertas);  // como solo se creea cuando se ejecuta la pagina es como si no existiera nada 
                                                                  // entonces se le pone el metodo   .addEventListener para cada elemento creado y poder ejecutar una fucion 
            

                const productos_valor = document.createElement('div');
                productos_valor.classList.add('productos_valor');
            
                const divProductos_v =document.createElement('div');
                divProductos_v.classList.add('divProductos_v');
            
                const valorP= document.createElement('p');
                valorP.classList.add('valor');
                valorP.innerText= '$'+ product.valor;  //le agrega el simbolo $ concatenado con valor de la lita
            
                const valor_infoP= document.createElement('p');
                valor_infoP.classList.add('valor_info');
                valor_infoP.innerText=  product.name;
                
            
                const logo_figure = document.createElement('figure');
            
                const logo_p= document.createElement('img');
                logo_p.classList.add('logo_p');
                logo_p.setAttribute('src','/imagen/logo_2.jpeg');  
            
                /* vamos a empezar a contcatenar  */
            
                logo_figure.appendChild(logo_p); // appendChild empieza a anidar 
            
                divProductos_v.appendChild(valorP);
                divProductos_v.appendChild(valor_infoP);
            
                productos_valor.appendChild(divProductos_v);
                productos_valor.appendChild(logo_figure);
            
                productos.appendChild(img_1);
                productos.appendChild(productos_valor);
            
                ofertas_container.appendChild(productos);
     
        }
}

listOfertasProductos(listaProductos);





/* productos  */

const listaProductosCompra = [];

const productos_valor =document.querySelector('.productos_valor');

productos_valor.addEventListener('click', addcar);

function addcar(){
   console.log("productos_valor", productos_valor.Value);
}
