const frutas=[];

const fruta = prompt("¿que fruta desea agregar a su carrito? ");

frutas.push(fruta);

while(confirm("¿Que otra fruta quieres agregar?")){
    const fruta= prompt ("Agrega otro Fruta");
    frutas.push(fruta);
}
console.log("usted tiene en su carrito las siguientes frutas");
for(let fruta of frutas ){
    console.log(fruta);
}