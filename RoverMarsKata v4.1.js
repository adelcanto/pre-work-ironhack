//V4.1 Giro Izquierda y Derecha, Movimiento hacia Adelante, Movimiento hacia Atrás, Log de Posición, Detección de Frontera de Movimientos, Detección de Obstáculos y Validación de Datos de Entrada 

//Declaración de objeto Rover Mars 1. Incluye propiedades para dirección y posición inicial.
let roverObject = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{direction: "N", x:0, y:0}]
};

//Declaración de objeto Rover Mars 2. Incluye propiedades para dirección y posición inicial.
let roverObject2 = {
    direction: "N",
    x: 9,
    y: 9,
    travelLog: [{direction: "N", x:9, y:9}]
}

//Definición inicial de array bidimiensional para posicionamiento de obstáculos
let terrain = [
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','O','','','','','','',''],
  ['','','','','O','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','O']
];

//Función para girar hacia la Izquierda el Rover Mars. Devuelve posición y nueva dirección y almacena en el Log de posición.
function turnLeft(rover){
     switch (rover.direction) {
        case ("N"):
            rover.direction = "W"
            break;
        case ("W"):
            rover.direction = "S"
            break;
        case ("S"):
            rover.direction = "E"
            break;
        case ("E"):
            rover.direction = "N"  
            break;
        } console.log(`Rover in now facing: ${rover.direction} and position is (${rover.x},${rover.y})`);
        let newLog = {direction: rover.direction, x: rover.x, y: rover.y};
        rover.travelLog.push(newLog);
      } 
    
//Función para girar hacia la Derecha el Rover Mars. Devuelve posición y nueva dirección y almacena en el Log de posición.
function turnRight(rover){
    switch (rover.direction) {
      case ("N"):
          rover.direction = "E"
          break;
      case ("W"):
          rover.direction = "N"
          break;
      case ("S"):
          rover.direction = "W"
          break;
      case ("E"):
          rover.direction = "S"  
          break;
  } console.log(`Rover in now facing: ${rover.direction} and position is (${rover.x},${rover.y})`);
  let newLog = {direction: rover.direction, x: rover.x, y: rover.y};
  rover.travelLog.push(newLog);  
}


function moveForward(rover, obstacles){
    switch (rover.direction) {
        case ("N"):
            if (rover.y != 0 && obstacles != true){  
                rover.y--;
                } else if (rover.y == 0) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x}, ${rover.y-1})`);  
                }
            break;
        case ("W"):
            if (rover.x != 0 && obstacles != true){  
                rover.x--;
                } else if (rover.x == 0) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x-1}, ${rover.y})`);  
                }
            break;            
        case ("S"):
            if (rover.y != 9 && obstacles != true){  
                rover.y++;
                } else if (rover.y == 9) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x}, ${rover.y+1})`);  
                }
            break;
        case ("E"):            
            if (rover.x != 9 && obstacles != true){  
                rover.x++;
                } else if (rover.x == 9) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x+1}, ${rover.y})`);  
                }
            break;
    } console.log(`Rover in now facing: ${rover.direction} and position is (${rover.x},${rover.y})`)
    let newLog = {direction: rover.direction, x: rover.x, y: rover.y};
    rover.travelLog.push(newLog);
    
} 

function moveBack(rover, obstacles){
    switch (rover.direction) {
        case ("N"):
            if (rover.y != 9 && obstacles != true){  
                rover.y++;
                } else if (rover.y == 9) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x}, ${rover.y+1})`);  
                }
            break;
        case ("W"):
            if (rover.x != 9 && obstacles != true){  
                rover.x++;
                } else if (rover.x == 9) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x+1}, ${rover.y})`);  
                }
            break;            
        case ("S"):
            if (rover.y != 0 && obstacles != true){  
                rover.y--;
                } else if (rover.y == 0) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x}, ${rover.y-1})`);  
                }
            break;
        case ("E"):            
            if (rover.x != 0 && obstacles != true){  
                rover.x--;
                } else if (rover.x == 0) {
                console.log("Rover Mars cannot move forward in this direction");
                } else {
                console.log(`There is an obstacle in position (${rover.x-1}, ${rover.y})`);  
                }
            break;
    } console.log(`Rover in now facing: ${rover.direction} and position is (${rover.x},${rover.y})`)
    let newLog = {direction: rover.direction, x: rover.x, y: rover.y};
    rover.travelLog.push(newLog);
    
}

// Función para la detención de obstáculos en movimientos hacia adelante.
function obsAhead(rover, obstacles) {
  let obstacleAhead = false;
  switch(rover.direction){
    case ("N"):
      if (rover.y != 0 && obstacles[rover.y-1][rover.x] == "O")
        obstacleAhead = true;
      break;
    case ("S"):
      if (rover.y != 9 && obstacles[rover.y+1][rover.x] == "O")
        obstacleAhead = true;
      break;
    case ("W"):
      if (rover.x != 0 && obstacles[rover.y][rover.x-1] == "O")
        obstacleAhead = true;
      break;
    case ("E"):
      if (rover.x != 9 && obstacles[rover.y][rover.x+1] == "O")
        obstacleAhead = true;
      break;
        }
  return obstacleAhead;
}
 
// Función para la detención de obstáculos en movimientos hacia atrás.
function obsBehind(rover, obstacles) {
    let obstacleBehind = false;
    switch(rover.direction){
      case ("N"):
        if (rover.y != 9 && obstacles[rover.y+1][rover.x] == "O")
          obstacleBehind = true;
        break;
      case ("S"):
        if (rover.y != 0 && obstacles[rover.y-1][rover.x] == "O")
          obstacleBehind = true;
        break;
      case ("W"):
        if (rover.x != 9 && obstacles[rover.y][rover.x+1] == "O")
          obstacleBehind = true;
        break;
      case ("E"):
        if (rover.x != 0 && obstacles[rover.y][rover.x-1] == "O")
          obstacleBehind = true;
        break;
          }
    return obstacleBehind;
  }

//Función para ejecución de secuencia de comandos de ruta. Incluye validación de entrada.
function command(rover, orders){
for (let i = 0; i < orders.length; i++){
    if (orders[i] == "f" || orders[i] == "b" || orders[i] == "l" || orders[i] == "r"){
        switch(orders[i]){
            case ("l"):
            turnLeft(rover);
            break;
            case ("r"):
            turnRight(rover);
            break;
            case ("f"):
            moveForward(rover, obsAhead(rover, terrain));
            break;
            case ("b"):
            moveBack(rover, obsBehind(rover, terrain));
            break;            
        }
    } else {
        console.log(`${orders[i]} is not a valid command, please type b, l, r or f`);
    }
    
}
for (let j = 0; j < rover.travelLog.length; j++){
console.log(`Log ${j}: (${rover.travelLog[j].direction}, ${rover.travelLog[j].x}, ${rover.travelLog[j].y})`);
}
}
  
  //Solicitud de datos para ruta Rover Mars
  let ordersPrompt = prompt("Introduce your commands for Rover Mars");
  command(roverObject, ordersPrompt);
  
  
  
  