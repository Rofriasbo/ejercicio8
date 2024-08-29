// 8. Búsqueda de elementos en un arreglo
function buscarElemento(arr, nombre) {
    // Buscar el elemento y devolver un mensaje personalizado con el índice
    const index = arr.indexOf(nombre);
    return index !== -1 
        ? `${nombre} está en el arreglo en la posición ${index}.` 
        : `${nombre} no está en el arreglo.`;
}
console.log(buscarElemento(["Ana", "Juan", "Thorfin","Carlos" ], "Thorfin")); // salida: "Thorfin está en el arreglo en la posición ."
console.log(buscarElemento(["Ana", "Juan", "Carlos", "Thorfin"], "Pedro")); // Salida: "Pedro no está en el arreglo."