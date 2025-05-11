function obj(objeto) {
    console.log(Object.entries(objeto))
    return Object.entries(objeto)
}

obj({nome: 'Carlos', idade: 20, pele: 'parda'})