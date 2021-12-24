const clientes =[
    {
    nome: 'Vinicius',
    cpf: '12345678912',
    dependentes: [
      { nome: 'Sara', parentesco: 'filha', dataNasc: '28/01/2003' },
      { nome: 'João Silva', parentesco: 'filho', dataNasc: '15/05/2004' }        
    ]},
    {
    nome: 'Maria',
    cpf: '47198234134',
    dependentes: [
        { nome: 'Joana', parentesco: 'filha', dataNasc: '22/11/2013' },
        { nome: 'Matheus', parentesco: 'filho', dataNasc: '05/07/1990' }        
    ]}
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes)

listaDependentes.forEach(obj => {
    console.log(obj.nome)
});