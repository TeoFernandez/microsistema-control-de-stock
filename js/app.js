let productos = loadTestProducts();

addEventListener("DOMContentLoaded", ()=>{ 

    function loadTestProducts() {

        let productos=[];

        let producto = {
            codigo:1,
            descripcion: "tornillos",
            cantidad: 10
        }

        productos = productos[productos, producto];

        producto = {
            codigo:2,
            descripcion: "tuercas",
            cantidad: 10
        }

        productos = productos[productos, producto];

        return productos;
    }
});