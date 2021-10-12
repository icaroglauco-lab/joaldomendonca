<script>
    // precisa levar o imovei como parametro para a pagina, nesse caso, estou começando com um mock
    import Carousel from '@beyonk/svelte-carousel'
    import { getContext } from 'svelte';
    import ContactTab from "../componentes/productContactTab.svelte";
    // import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    let data = getContext('product data');

    let simuladoVezes = 0;
    let entrada = 1000;
    $: parcelamento = (data['planos']["preço a vista"] - entrada) / (simuladoVezes)
</script>

<!-- é apenas o conteudo da pagina, excluindo footer , barra de pesquisa e header geral -->

<div class="container">
    <div class="title">
        <h2 class="titulo">
            {data.titulo}
            <small>
                {data['palavras-chave'].join(', ')}
            </small>
        </h2>
        <div class="left">
            <small class="status">{data.status}</small>
            <span class="preco">R${data.planos['preço a vista']}</span>
        </div>
    </div>
    <Carousel perPage={1} duration={500}>
        {#each data.fotos as foto}
            <div class="slide-content">
                <img class="carousel-img" src={foto} alt="">
            </div>
        {/each}
    </Carousel>

    <div class="content">
        <div class="description">
            <div class="id-share">
                <h3>ID da propriedade {data.id}</h3>
                <div class="socials"></div>
            </div>
            <hr style="border-style: dashed"/>
            <div class='content2'>
                <div class="features">
                    <h4>Features</h4>
                    {data["features"]}
                </div>
                <div class="desc">
                    <h4>Descrição</h4>
                    <p>
                        {data["descrição"]}
                    </p>
                </div>
                <div class="adicionais">
                    <h4>Detalhes adicionais</h4>
                    {data["detalhes adicionais"]}
                </div>
                <div class="planos">
                    <h4>Planos de pagamentos</h4>
                    <p>
                        <span>
                            Valor a vista do imóvel: R${data["planos"]["preço a vista"]}
                        </span>
                        <br/>
                        <span>
                            Taxa de juros para esse empreendimento: {data["planos"]["juros"] * 100}%
                        </span>
                    </p>

                    <div class="entrada">
                        <h5>Simulação:</h5>
                        <label for="">Entrada: R$</label> 
                        <input class="entrada" bind:value={entrada} type="number" min="1000">
                    </div>

                    <div class="simulação">
                        <label for="">Em</label>
                        <select name="" id="" bind:value={simuladoVezes}>
                            {#each Object.keys(data["planos"].termos) as termo_de_pagamento}
                                <option value={data["planos"].termos[termo_de_pagamento]}>{termo_de_pagamento}</option>
                            {/each}
                        </select> vezes 
                        <br/>
                        Parcelas: R${parcelamento.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
        <ContactTab data={data}/>
    </div>
</div>



<style>
    .container{
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-bottom: 100px;
    }
    .slide-content{
	    height: 600px;
        display: flex;
    }
    .slide-content img{
        height: 100%;
        margin: 0 auto;
    }

    :global(.carousel){
        border: 2px solid #eaeaea
    }

    .content{
        display: grid;
        margin-top: 55px;
        width: 100%;
        grid-template-columns: auto 300px;
    }

    .title{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .title .left{
        display: flex;
        flex-direction: column;
    }
    .title small{

    }
    .title span{
        font-size: 18pt;
        color: teal
    }

    .titulo{
        display: flex;
        flex-direction: column;
    }
    .titulo small{
        font-weight: 100;
    }

    .description{
        padding: 30px;
        box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.05);
        margin-top: 50px;
        margin-right: 30px;
        background-color: white;
    }

    .content2 > div{
        margin-bottom: 30px;
    }

    .content > div h4{
        color: teal
    }

</style>