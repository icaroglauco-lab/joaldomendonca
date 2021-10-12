import FullData from './mockdata.json';

var filtros = []

export const adicionarFiltro = (filtro) => {
    filtros.push(filtro)
}

export const limparFiltros = () => {
    filtros = []
}

export const Data = () => {
    return filtros.reduce( 
        (dataAcumulada, atualFiltro) => atualFiltro(dataAcumulada) , 
    FullData.propriedades);
}