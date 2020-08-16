const { multiplicar } = require('./Multiplicar')
const fs = require('fs')
const argv = require('yargs')
                    .command('listar','Imprime por consola la tabla de multiplicar',{
                        base: {
                            demand: true

                        }
                    })
                    .argv
let argv = process.argv
let param = argv[2]
let base = param.split('=')[1]


multiplicar(base)
.then(result =>{
    fs.writeFile(`./tablade${base}.txt`, result,(err) =>{
        if(err) throw err;
        console.log('se grabo el archivo')
    })
    for(i=0; i<=result.length;i++){
        let iterateValue = result.shift()
        
        console.log(iterateValue)
    }
})
.catch(e=> console.log(e));
