//variable que mantiene el estado del menu
let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarOcutar(){
    if(manuVisible){
        document.getElementById("nav").classList ="";
        manuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        manuVisible = true;
    }
}
//funcion para ocultar el menu cuando se seleccona una opcion
function seleccionar(){
    document.getElementById("nav").classList ="";
    manuVisible = true;
}