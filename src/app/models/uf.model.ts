class regiao {
    id: number
    sigla: string
    nome: string
}

export class UfModel {
    id: number
    sigla: string
    nome: string
    regiao: regiao
}
