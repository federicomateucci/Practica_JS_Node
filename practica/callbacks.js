let getUsuarioById = (id, callback) => {

    let usuario = {
        nombe: 'Federico',
        id
    }
    if(id===10|| id===20){
        callback(`El usuario con id ${id}, no existe en la bd`)
    }else{
    callback(null, usuario);} // el parametro null es es el erro que estaria vacio pero hay que llevarlo al retorno
}




getUsuarioById(1, (err,usuario) => { // se recibe err y usuario 2 parametros si cumple la condicion 'err' se ejecuta si no , pasa al otro
    if(err){
       return console.log(err)
    }

     return console.log(`El usuari es ${usuario.nombe} y el id es ${usuario.id}`)
})