const { multiplicar } = require('./Multiplicar')
let base = 5;
const argv = require('yargs')
                    .command('listar','Imprime en consola la tabla de multiplicar',{
                        base:{
                            demand: true
                        } 
                    })
                    .argv

//console.log(process.argv)

let argv2 = process.argv
 console.log(argv);
 console.log(argv2)

//let param = argv[2]
//setTimeout(() => {
   // base = param.split('=')[1]
    //console.log(base)    
//}, 3000);
