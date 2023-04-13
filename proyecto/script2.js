

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
//const ofertas_container = document.querySelector('.insert_fourt');



function listOfertasProductos(arr){
        for (product of arr){
                const productos = document.createElement('div');  // crea el elemento div
                productos.classList.add('productos');             // le agrega la  clasee 'productos'
            
                const img_1 = document.createElement('img');
                img_1.setAttribute('src', product.img);    // le cambia el atributo src por el q tenemos asignado en la lista 
                img_1.classList.add('productos_img');
            
                const productos_valor = document.createElement('div');
                productos_valor.classList.add('productos-valor');
            
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

listOfertasProductos(listaProductos)