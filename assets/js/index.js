function filtrarPropiedades() {
  const numero_cuartos = document.getElementById("numero_cuartos").value;
  const metros_desde = document.getElementById("metros_desde").value;
  const metros_hasta = document.getElementById("metros_hasta").value;

  if (!numero_cuartos || !metros_desde || !metros_hasta) {
    alert("Faltan campos por llenar");
  } else {
    mostrarPropiedades(numero_cuartos, metros_desde, metros_hasta);
  }
}

function mostrarPropiedades(rooms = "*", metersFrom = "*", metersTo = "*") {
  html_contenedor = "";
  contenedor_propiedades = document.getElementById("contenedor_propiedades");
  span_total_propiedades = document.getElementById("total_propiedades");

  let cantidad_propiedades = 0;

  for (let propiedad of propiedadesJSON) {
    if (
      (propiedad.rooms == rooms &&
        propiedad.m >= metersFrom &&
        propiedad.m <= metersTo) ||
      (rooms == "*" && metersFrom == "*" && metersTo == "*")
    ) {
      html_contenedor += `<div class="propiedad">
            <div class="img" style="background-image:url('${propiedad.src}')"></div>
            <section>
            <h5>${propiedad.name}</h5>
            <div class = "d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
            </div>
            <p class = "my-3">${propiedad.description}</p>
            <button class = "btn btn-info">Ver más</button>
            </section>
            </div>`;
      cantidad_propiedades++;
    }
  }
  contenedor_propiedades.innerHTML = html_contenedor;
  span_total_propiedades.innerHTML = cantidad_propiedades;
}

mostrarPropiedades();
