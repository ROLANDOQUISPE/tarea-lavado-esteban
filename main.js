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

function inicio(){
    const main = document.getElementById("main")
    main.innerHTML = `
    <div style="text-align: center;">
    <h2>ofrcemos</h2>
</div>
<div style="flex-direction: row-reverse;" class="carta">


    <div>
    <img style="width: 300px;" src="https://img.freepik.com/foto-gratis/hermoso-coche-servicio-lavado_23-2149212221.jpg"/>
    </div>
    <div style="margin-right: 50px;" >
        <div>
    <h3 class="sub-title">paquete</h3>
        </div>
        <div class="opciones">
            <div>
    <ul>
        <li>lavado completo</li>
        <li>lavado para venta</li>
    </ul>
            </div>


        </div>
    </div>
</div>


<div class="carta">


    <div>
    <img style="width: 300px;" src="https://www.automovilclub.cl/wp-content/uploads/2021/10/1622470488.jpeg"
    >
    </div>
    <div style="margin-left: 50px;" >
        <div>
    <h3 class="sub-title">servicios</h3>
        </div>
        <div class="opciones">
            <div>
    <ul>
        <li>pulida</li>
        <li>lavado interno</li>
        <li>lavado externo</li>
    </ul>
            </div>
            <div>
                <ul>
                    <li>lavado de motor</li>
                    <li>lavado de chasis</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    ` 
}

function reserva(){
    const main = document.getElementById("main")
    main.innerHTML = `
    <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">fabricante</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

  <span class="input-group-text" id="inputGroup-sizing-sm">modelo</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

  <span class="input-group-text" id="inputGroup-sizing-sm">fecha</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<span class="input-group-text" id="inputGroup-sizing-sm">hora</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

  <span class="input-group-text" id="inputGroup-sizing-sm">numero de contacto</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

  <label class="input-group-text" for="inputGroupSelect01">servicio</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>seleccione el servicio</option>
    <option value="1">pulida</option>
    <option value="2">lavado interno</option>
    <option value="3">lavado externo</option>
    <option value="4">lavado de motor</option>
    <option value="5">lavado de chasis</option>
  </select>
  <button onclick="listo()">reservar</button>
    `
}
function listo (){
    alert("listo la reserva,lo esperamos")
}