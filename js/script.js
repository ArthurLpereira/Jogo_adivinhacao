let select = document.getElementById("escolher_dificuldade");
let button = document.getElementById("confirmar_dificuldade");
button.addEventListener("click", () =>{
    let num_colocar;

    if (select.value === 'facil') {
        num_colocar = 20;
    } else if (select.value === 'medio') {
        num_colocar = 50;
    } else if (select.value === 'dificil') {
        num_colocar = 200;
    } else {
        console.log("Essa dificuldade nao existe");
        return;
    }
    console.log(num_colocar)
})

