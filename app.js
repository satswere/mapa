var items = [];
const valor_x = 10;
const valor_y = 10;
let y = 0;
let x = 0;
let last_color = " ";
let color = " ";
other_color = " ";
sss
llenado();

function llenado() {
  //vertical
  for (y = 0; y < valor_y; y++) {
    llenado_y();
  }
  //console.table(items);
  recorrido();
}

function llenado_y() {
  //horizontal
  let ejemplo = [];
  for (x = 0; x < valor_x; x++) {
    ejemplo.push(`${y},${x}`);
    //ejemplo.push("hola");
    //se agrego mas 1 solo para fines de visualizacion
  }
  items.push(ejemplo);
}

function recorrido() {
  let key = 0;
  for (let y = 0; y < valor_y; y++) {
    for (let x = 0; x < valor_x; x++) {
     // console.log(y, x);

      if (x === 0 && color != " ") {
        let valor_arriba = items[y - 1][x];
        opciones(key, y, x); //envio del valor
        //   console.log(valor_arriba);
        //  console.log( items[y][x]);
        if (items[y][x] === valor_arriba) {
          items[y][x] = other_color;
        }
      } else {
        key = items[y][x - 1];
        opciones(key, y, x);
      }
    }
  }
}

function opciones(key, y, x) {
  switch (key) {
    case "blanco":
      items[y][x] = "gris";

      last_color = "blanco";
      color = "gris";
      other_color = "negro";
      break;
    case "gris":
      items[y][x] = "negro";

      last_color = "gris";
      color = "negro";
      other_color = "blanco";
      break;
    case "negro":
      items[y][x] = "blanco";

      last_color = "negro";
      color = "blanco";
      other_color = "gris";
      break;
    default:
      items[y][x] = "blanco";

      other_color = "blanco";
      last_color = "blanco";
      color = "blanco";
      break;
  }
}
console.table(items);

function pintar() {
  let color_asignado = "";
  let texto_celda ="";
  const tabla = document.querySelector("#contenido_tabla");
 // console.log(tabla);

  for (let y = 0; y < valor_y; y++) {
    for (let x = 0; x < valor_x; x++) {
      switch (items[y][x]) {
        case "blanco":
          color_asignado = "white";
          break;
        case "gris":
          color_asignado = "gray";
          break;
        case "negro":
          color_asignado = "black";
          break;
      }
      //imprimir la tabla
      texto_celda += `<td style="background-color:${color_asignado}"> ____</td>`
    }
    tabla.innerHTML +=`<tr>${texto_celda}</tr>`;
    texto_celda = "";
  }
}

pintar();
