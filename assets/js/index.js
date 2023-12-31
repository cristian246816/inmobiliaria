const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
let piezas;
let minimo;
let maximo;


const botonBusqueda = document.getElementById('busqueda')
const totalPropiedades = document.getElementById("busqueda_total")
const seccionPropiedades = document.querySelector(".propiedades")


const inputs = () => {
  piezas = parseInt(document.getElementById('piezas').value)
  minimo = parseInt(document.getElementById('minimo').value)
  maximo = parseInt(document.getElementById('maximo').value)
}

const mostrarPropiedades = (propiedades) => {
  let iteracion = ""
  for (let propiedad of propiedades) {
    iteracion += `

<div class="propiedad">
    <img class="img" src="${propiedad.src}" alt="">
  <section>
    <h5>${propiedad.name}</h5>
    <div class="d-flex justify-content-between">
      <p>Cuartos:${propiedad.rooms}</p>
      <p>Metros:${propiedad.m}</p>
    </div>
    <p class="my-3">${propiedad.description}</p>
    <button class="btn btn-info">Ver más</button>
  </section>
</div>`
  }
  seccionPropiedades.innerHTML = iteracion
}

totalPropiedades.textContent = propiedadesJSON.length;

mostrarPropiedades(propiedadesJSON);

botonBusqueda.addEventListener("click", () => {
  inputs()
  if (isNaN(piezas) || isNaN(minimo) || isNaN(maximo)) {
    alert("Debes llenar todos los campos correspondientes.")
  } else if (piezas < 1 || maximo < 1) {
    alert(`La "CANTIDAD" de piezas o el tamaño "MÁXIMO" no puede ser "0"`)
  } else if (minimo > maximo) {
    alert(`El tamaño "MÍNIMO" de la propiedad debe ser menor que el tamaño "MÁXIMO"`)
  } else if (minimo < 0) {
    alert(`El tamaño "MÍNIMO" debe ser "MAYOR" o "IGUAl" a "0"`)
  } else {
    
    const propiedadesFiltradas = propiedadesJSON.filter(propiedad => {
      return (
        propiedad.rooms === piezas &&
        propiedad.m >= minimo &&
        propiedad.m <= maximo
      );
    });

    
    mostrarPropiedades(propiedadesFiltradas);
    totalPropiedades.innerHTML = propiedadesFiltradas.length
  }
})
