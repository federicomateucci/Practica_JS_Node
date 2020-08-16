/*
* ASYNC - AWAIT
*/


//let getNombre = async () =>{
    
  //  throw new Error('No existe un nombre para el usuario');
   
    //return 'fernando';
  
//};

let getNombre = () =>{
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve('Federico')    
        }, 3000);
        
        
        
    });
   
   
  
};

let saludo = async () =>{  // se utiliza la funcion async al princpi para luego utilizar el await

    let nombre = await getNombre(); // JS no va a continuar la funcion hasta no tener el valor de la variable ${nombre}
    
    return `Hola ${nombre}`; // retorna una vez esperado los 3 segundos que tarda la funcion de getNombre()
}





saludo().then(msg =>{
    console.log(msg)
 })