const cajaNombre = document.getElementById("cajaNombre");
const botonAgregarTarea = document.getElementById("botonAgregarTarea");
const tareasTotales = document.getElementById("tareasTotales");
const tareasCompletadas = document.getElementById("tareasCompletadas");
const listaTareas = document.getElementById("listaTareas");

let misTareas = [
  {
    id: Math.floor(Math.random() * 100),
    nombre: "Hacer compras",
    realizada: false,
  },
  {
    id: Math.floor(Math.random() * 100),
    nombre: "Estudiar",
    realizada: false,
  },
  {
    id: Math.floor(Math.random() * 100),
    nombre: "Pasear al perro",
    realizada: false,
  },
];

const renderListaTareas = (id, nombre, realizada) => (
  `<li>
  <span> ${id} </span>
  - <span> ${nombre} </span>
  - <input type="checkbox" onclick="checkTarea('${nombre}')", this ${realizada ? "checked" : ""} />
  - <button type="button" onclick="borrarTarea('${nombre}')"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg> </button>
  </li>`
);

const renderTareas = () => {
  misTareas = misTareas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  listaTareas.innerHTML = ""
  for (tarea in misTareas) {
    listaTareas.innerHTML += renderListaTareas(
      misTareas[tarea].id,
      misTareas[tarea].nombre,
      misTareas[tarea].realizada,
    );
  }
  tareasTotales.innerHTML = misTareas.length;
  tareasCompletadas.innerHTML = misTareas.filter((tarea) => tarea.realizada == true).length;
};

renderTareas();

const agregarTarea = () => {
  if (cajaNombre.value !=""){
    misTareas.push(
      {
        id: Math.floor(Math.random() * 100),
        nombre: cajaNombre.value,
        realizada: false,
      }
    )
  }
  renderTareas();
  cajaNombre.value = "";
};

const borrarTarea = (nombreTareaParaBorrar) => {
  misTareas = misTareas.filter((tarea) => tarea.nombre != nombreTareaParaBorrar);
  renderTareas();
};

const checkTarea = (nombreTareaConCheck) => {
  const tareaConCheck = misTareas.filter((tarea) => tarea.nombre == nombreTareaConCheck);
  const tareaSinCheck = misTareas.filter((tarea) => tarea.nombre != nombreTareaConCheck);
  if (tareaConCheck.length > 0) {
    tareaConCheck[0].realizada = !tareaConCheck[0].realizada;
    misTareas = [...tareaConCheck, ...tareaSinCheck]
  }
  renderTareas();
};

