const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    let vetor = []
    
    for(let fem in funcionarios){
        if(funcionarios[fem].genero === "F" && funcionarios[fem].pais === "China"){
           vetor.push(funcionarios[fem].salario)
    }
}
    let minimo = Math.max(...vetor)

    funcionarios.forEach((funcionarios) => {
        if(funcionarios.salario == minimo){
            console.log(funcionarios)
        }
    })
})