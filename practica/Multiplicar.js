const fs = require('fs')


module.exports.multiplicar = async (base)=>{
   
        
        if(!Number(base)){
           throw new Error(`El dato ingresado ${base}, no es un numero por favor ingrese un numero`);
            
        }
        let data = []
        let string=''
        for(i=0;i<=10;i++){
            string += `${base} * ${i} = ${base*i}\n`
            data.push(string)
        }
        
        return data,string;
    


}