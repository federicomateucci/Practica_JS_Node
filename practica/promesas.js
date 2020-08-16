//******************************************************//
//                   PROMESAS                           //
//******************************************************//    



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


let getEmpleado = (id) => {

    return new Promise((resolve, reject) =>{


        let empleadoDB = empleados.find( empleado => empleado.id === id) 

        if(!empleadoDB){
            reject(`No existe el empleado con este ${id}`) // devuelve el error reject por convencion
        }else{
            resolve(empleadoDB) // devuelve el empleado
          
        }
    })

}

let getSalary = (empleado) => {
    return new Promise((resolve, reject)=>{
        let Salary = salario.find(value => value.id===empleado.id)

    if(!Salary){
        reject(`No existe este salario para ${empleado.nombre}`);
    }else{
        resolve({salario: Salary.salary,
                nombre: empleado.nombre})
    }
})
    }
    

    // ejemplo de reutilizacion de promesas funciones una dentro de otra //

//getEmpleado(3).then(empleado =>{
   // console.log(`Empleado de BD ${empleado.nombre}`)
   // getSalary(empleado).then(salary =>{
     //   console.log(`El salario de ${salary.nombre}, es de ${salary.salary}`)
      //  if(!salary){
      //      console.log(`No hay salario para ${empleado.nombre}`)
      //  }
   // }).catch(e=> console.log(e)) // atajo el error de getSalary()
//}).catch(e => console.log(e)) // atajo el erro de getEmpleado()


getEmpleado(3).then(empleado => {
    return getSalary(empleado);
})
.then(resp =>{
    console.log(`El salario de ${resp.nombre}, es de $${resp.salario}`)
}).catch(e=>console.log(e))  
