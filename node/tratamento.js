const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

let menor_salario = 0    

    for(let sexo in funcionarios){
        if(funcionarios[sexo].genero === "F" && funcionarios[sexo].pais === "China"){  
            teste = funcionarios[sexo].salario
            if(teste < funcionarios[sexo].salario){
                this.menor_salario = funcionarios[sexo].salario
            }
          
    }
}
    console.log(menor_salario)
})