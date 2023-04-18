function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch("http://localhost:3000/api/authenticate", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
        .then((response) => response.json())
        .then((response) => {
            alert('Sucesso ao fazer o Login, agora você ja pode testar seu JWT')
            console.log(response)
            localStorage.setItem("upf", response.token)
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function testJwt() {
    const token = localStorage.getItem("upf")
    console.log(token)
    fetch("http://localhost:3000/api/test", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token}`
        },
        body: JSON.stringify({
            student: "188502"
        })
    })
        .then((response) => response.json())
        .then((response) => {
            alert('Testado e funcionando, verifique o console para visualizar o TOKEN')
            console.log(response)
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function clearToken() {
    localStorage.removeItem("upf")
    alert("Token removido com sucesso!")
}