function vision() {
    const contenedor = document.getElementById("respuesta")
    contenedor.innerHTML = `
    <button onclick="borrar ()">X</button> 
    <h5 style="text-align: center;">nuestra vision</h5>
    <p style="text-align: center;">hacer una empresa donde nuestros clientes se sientan satisfechos con el servicios de lavados de autos</p>`
    
}
function mision(){
    const contenedor = document.getElementById("respuesta")
    contenedor.innerHTML = `
    <button onclick="borrar ()">X</button> 
    <h5 style="text-align: center;">nuestra mision</h5>
    <p style="text-align: center;"> mantener los autos siempre limpios</p>`

}
function pregunta1(){
    const contenedor = document.getElementById("respuesta")
    contenedor.innerHTML = `
    <button onclick="borrar ()">X</button> 
    <h5 style="text-align: center;">¿cuando tiempo antes hago la reserva?</h5>
    <p style="text-align: center;">La recerva tiene que hacerse dos dias antes</p>`
}
function pregunta2(){
    const contenedor = document.getElementById("respuesta")
    contenedor.innerHTML = ` 
    <button onclick="borrar ()">X</button>
    <h5 style="text-align: center;">¿que pasa si no voy?</h5>
    <p style="text-align: center;">si pasa 10 minutos despues de su recervacion.Se tendra que hacer nuevamente la reservacion (si lo solicita se le devolvera un 50% del dinero de la reserva como maximo)</p>`
}
function pregunta3(){
    const contenedor = document.getElementById("respuesta")
    contenedor.innerHTML = ` 
    <button onclick="borrar ()">X</button>
    <h5 style="text-align: center;">¿puedo cancelar mi reserva?</h5>
    <p style="text-align: center;">si,si cancela la recerva como maximo un dia antes y se le devolvera el 100% del dinero de la reserva</p>`
}
function borrar (){
    const contenedor = document.getElementById("respuesta")
    contenedor.innerHTML = ``
}