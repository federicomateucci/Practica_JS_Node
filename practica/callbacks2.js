let empleados = [{
    id: 1,
    nombre: 'Federico'
},{
    id: 2,
    nombre: 'Mariela'
},{
    id: 3,
    nombre: 'Fernando'
}];

let salario = [{
    id: 1,
    salary : 1000
},{
    id: 2,
    salary : 2000
}];

let getEmpleado = (id, callback) => {
    
    let empleadoDB = empleados.find( empleado => empleado.id === id) 

    if(!empleadoDB){
        callback(`No existe el empleado con este ${id}`)
    }else{
        callback(null, empleadoDB)
      
    }
}


let getSalary = (empleado, callback) => {
 
    let Salary = salario.find(value => value.id===empleado.id)

    if(!Salary){
        callback(`No existe este salario para ${empleado.nombre}`);
    }else{
        callback(null, {
            nombre: empleado.name,
            salario : Salary.salary
        })
    }
}

getEmpleado(2,(err, empleado)=>{
    if(err){ return console.log(err)}
    else{    
    getSalary(empleado, (err, resp) =>{
        if(err){
            return console.log(err)
        };
        console.log(`el salario de ${resp.nombre}, es de $ ${resp.salario}`)
    })}
        
})