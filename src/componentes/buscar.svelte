<script>
    import FullData from '../mockdata.json';
    import {adicionarFiltro, limparFiltros, Data} from '../listagem';
    // testes
    // filtro de apenas disponíveis
    adicionarFiltro( (fd) => {
        return fd.filter( d => !d.status.includes("Indisponí") )
    })
    // log
    console.log(Data());

    // reseta
    limparFiltros();

    // filtro de imoveis com preços abaixo de 3000
    adicionarFiltro( (fd) => {
        return fd.filter( d => d["planos"]["preço a vista"] < 20000 )
    })

    // log
    console.log(Data());
</script>

<div class="busca">
    <div class="opt">
        <h5>Disponibilidade</h5>
        <select class='form-select'>
            <option value="Disponível">Disponível</option>
            <option value="Indisponível">Indisponível</option>
        </select>
    </div>
    <div class="opt">
        <h5>Preço</h5>
        <select class='form-select'>
            <option value="domenor">Do menor</option>
            <option value="domaior">Do maior</option>
        </select>
    </div>
    <div class="opt">
        <h5>Localização</h5>
        <select class='form-select'>
            {#each [...new Set(FullData.propriedades.map(d => d['endereço']))] as localization}
                <option value={localization}>{localization}</option>
            {/each}
        </select>
    </div>
    <div class="buscar-action">
        <span>Buscar</span>
    </div>
</div>

<style>
    .busca{
        display: grid;
        width: 950px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 0 auto;
        margin-bottom: 50px;
        margin-top: -60px;
        background-color: aliceblue;
    }

    .busca > div{
        border: 1px solid rgba(136, 136, 136, 0.507);
        padding: 0.5rem
    }

    .buscar-action{
        font-size: 19pt;
        place-items: center;
        justify-content: center;
        display: flex;
    }
</style>