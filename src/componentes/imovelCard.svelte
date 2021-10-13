<script>
    import { link } from "svelte-navigator";

    export let data;
    console.log(data.id);
</script>

<div class="container">
    <a href={`imovel/${data.id}`}>
        <div class="fotografia">
            <div class="status">
                <div class="badges">
                    <div class="fotos">
                        <i></i>
                        {data.fotos.length}
                    </div>
                </div>
                <div class="info">
                    <div class="tipo">
                        <span>
                            <!-- {data["palavras-chave"].join(', ')} -->
                        </span>
                        <span>
                            {data.status}
                        </span>
                    </div>
                </div>
            </div>
            <img src={data.fotos[0]} alt="">
        </div>
    </a>
    <div class="conteudo">
        <div class="title">{data.titulo}</div>
        <div class="loc">{data.endereço}</div>
        <div class="data"></div>
        <div class="features">
            
        </div>
        <div class="actions">
            <div class="preco">
                R${data["planos"]["preço a vista"]}
            </div>
            <div class="botoes"></div>
        </div>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: fit-content;
        background-color: white;
        box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.05);
        overflow: hidden;
    }
    .fotografia{
        height: 250px;
        width: auto;
        cursor: pointer;

    }
    .fotografia img{
        height: 100%;
        transition: transform 0.25s ease-in-out;
        z-index: -1;
    }
    .fotografia img:hover{
        transform: scale(1.02);
    }
    .status{
        position: absolute;
        top: 0;
        height: 250px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        z-index: 1;
    }
    .conteudo{
        min-height: 200px;
        display: flex;
        flex-direction: column;
    }
    .conteudo > div{
        padding: 15px
    }
    .conteudo .title{
        font-size: 14pt;
        color: teal
    }
    .conteudo .loc{
        text-decoration-line: underline overline;
    }
    
</style>