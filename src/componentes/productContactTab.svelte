<script>
    import { SendIcon } from 'svelte-feather-icons'
    import Fa from 'svelte-fa'
    export let data;

</script>

<div class="wrapper">
    <div class="info">
        <img src="https://thumbs.dreamstime.com/b/opte-pelo-avatar-placeholder-da-foto-ícone-do-perfil-124557887.jpg" alt="" class="avatar">
        <strong><h3>
            Joaldo
        </h3> </strong>
        <span>
            Escritório: Shopping
        </span>
        <span>
            Telefone: 7777777
        </span>
        <span>
            Whatsapp: 7777777
        </span>
    </div>
    <span class="chamada">
        Agende agora mesmo
    </span>
    <form>
        <label for="">Nome</label>
        <input type="text" placeholder="Nome">
        <hr/>
        <label for="">Telefone</label>
        <input type="text" placeholder="(xx) xxxx-xxxx">
        <hr/>
        <label for="">Email</label>
        <input type="text" placeholder="exemplo@email.com">
        <hr/>
        <label for="">Mensagem</label>
        <textarea type="text" placeholder="Mensagem">   {`Olá, estou interessado em saber mais sobre a propriedade ${data['titulo']} na localidade ${data['endereço']}`}</textarea>
    </form>

    <div class="acoes">
        <span class="mensagem">
            <SendIcon/>
            <span>
                Enviar por mensagem
            </span>
        </span>
        <a href={`https://api.whatsapp.com/send?phone=777777777777&text=Olá, estou interessado em saber mais sobre a propriedade ${data['titulo']} na localidade ${data['endereço']}`}>
        <span class="whatsapp">
                <i class="fab fa-whatsapp"></i>
                <span>
                    Enviar por whatsapp
                </span>
            </span>
        </a>
    </div>
</div>

<style>
    .wrapper{
        width: 300px;
        display: flex;
        flex-direction: column;
        background-color: white;
        margin-top: 50px;
        box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.05);
        padding-bottom: 0px;
    }
    .info{
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-top: -55px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .info strong{
        font-size: 16pt;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .info > span{
        margin-bottom: 10px;
    }

    .avatar{
        width: 150px;
        margin-bottom: 15px;
    }
    .wrapper div, .wrapper form{
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    .chamada{
        padding: 2rem;
        text-align: center;
        background-color: cadetblue;
        color: white;
        font-size: 14pt;
    }

    form{
        padding: 5%;
        margin-top: 10px;
    }

    hr{
        width: 110%;
        margin-left: -5%;
        margin-bottom: 20px;
    }

    form input{
        border: none;
        padding: 1rem;
        display: block;
    }
    form label{
        margin-bottom: 10px;
    }
    form textarea{
        height: 160px;
        border-style: none;
        font-size: 12pt;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .acoes{
        width: 100% !important;
        display: grid !important;
        grid-template-columns: 50% 50%;
        /* grid-gap: 10%; */
        flex-direction: row !important;
    }

    .acoes > *{
        padding: 10px;
        margin: 3px;
        margin-bottom: 0px;
        background-color: cadetblue;
        cursor: pointer;
    }

    .mensagem{
        display: grid;
        height: 40px;
        grid-template-columns: 55px auto;
        color: #fff !important;
        margin-left: 0;
    }

    .whatsapp{
        display: grid;
        grid-template-columns: 44px auto;
        color: #fff !important;
        grid-gap: 7px;
        margin-right: 0;
    }
    .whatsapp i{
        font-size: 40px;
        margin-left: auto;
    }
</style>