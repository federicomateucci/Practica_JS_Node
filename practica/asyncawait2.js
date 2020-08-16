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


let getEmpleado = async (id) => {

    


        let empleadoDB = empleados.find( empleado => empleado.id === id) 

        if(!empleadoDB){
            throw new Error(`No existe este empleado = ${id} en la BD `) // devuelve el error reject por convencion
        }else{
           return empleadoDB // devuelve el empleado
          
        }
    

}

let getSalary = async (empleado) => {
   
        let Salary = salario.find(value => value.id===empleado.id)

    if(!Salary){
        throw new Error(`No existe este salario para ${empleado.nombre}`);
    }else{
        return({salario: Salary.salary,
                nombre: empleado.nombre})
    }

    }



//getEmpleado(3).then(empleado => {
 //return getSalary(empleado);
//})
//.then(resp =>{
 //   console.log(`El salario de ${resp.nombre}, es de $${resp.salario}`) })
   // .catch(e=>console.log(e))  
    

let getInfo = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalary(empleado)

    return `${empleado.nombre} gana de salario $${resp.salario}`;

}


getInfo(2)
.then(msg => console.log(msg))
.catch(e=>console.log(e));
