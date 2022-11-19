function handleChange(event) {
    console.log(event.target.value);

    window.sessionStorage.setItem("teste", event.target.value);
}

const name = document.getElementById("name")
const naenderecome = document.getElementById("endereco")

name.addEventListener("change", handleChangename);
endereco.addEventListener("change", handleChangeendereco);