addEventListener("DOMContentLoaded", () => { 

    function loadTestProducts() {
        let productos = [];

        let producto = {
            codigo: 1,
            descripcion: "Tornillos",
            cantidad: 10
        };
        productos.push(producto);

        producto = {
            codigo: 2,
            descripcion: "Tuercas",
            cantidad: 10
        };
        productos.push(producto);

        producto = {
            codigo: 3,
            descripcion: "Martillo",
            cantidad: 1
        };
        productos.push(producto);

        producto = {
            codigo: 4,
            descripcion: "Cable",
            cantidad: 30
        };
        productos.push(producto);

        producto = {
            codigo: 5,
            descripcion: "Amoladora",
            cantidad: 4
        };
        productos.push(producto);

        return productos;
    }

    const productos = loadTestProducts();

    const btnBuscar = document.getElementById("Buscar");
    const inputCodigo = document.getElementById("codigo");
    const inputDescripcion = document.getElementById("descripcion");
    const inputCantidad = document.getElementById("cantidad");

    btnBuscar.addEventListener("click", () => {
        let codigoBuscado = parseInt(inputCodigo.value);

        let producto = productos.find(p => p.codigo == codigoBuscado);

        if (producto) {
            inputDescripcion.value = producto.descripcion;
            inputCantidad.value = producto.cantidad;
        } else {
            alert("Producto no encontrado");
            inputDescripcion.value = "";
            inputCantidad.value = "";
        }
    });

    btnActualizar.addEventListener("click",() =>{
        let codigoBuscado =  parseInt(inputCodigo.value);

        let producto = productos.find(p => p.codigo == codigoBuscado);

        if(producto){
            
        }
        else{
            alert("Producto no encontrado");
        }
    })
});
