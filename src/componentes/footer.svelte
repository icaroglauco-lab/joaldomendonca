<script>

</script>

<footer>
    <div class="top">
        <div class="logo">
            <img src="https://scontent.fgnm1-1.fna.fbcdn.net/v/t39.30808-6/218311632_115886290761239_2552422985161919335_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHex3HyT4zOZOfcvCa8t6akpMWZPz9MUdCkxZk_P0xR0BDcZx1BeLmcHkbu-UJcTlBEQ6dWGmyF-Mmus_xRImbh&_nc_ohc=A_SSoTxx4b4AX8g8N-s&_nc_ht=scontent.fgnm1-1.fna&oh=605e47df208c236624838f1c08bff4ce&oe=616A1FA7" alt="">
            <h2>
                Joaldo Mendonça
            </h2>
        </div>
        <div class="s-links"></div>
    </div>
    <div class="nav">
        <div class="quick">
            <h4>Links rápidos</h4>
            <ul class="">
                <li><a href="/">Início</a></li>
                <li><a href="/listagem">Propriedades</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </div>
        <div class="empreendimentos">
            <h4>Empreendimentos</h4>
            <ul>
                <li><a href="/listagem/:empreendimento">Empreendimento</a></li>
            </ul>
        </div>
    </div>
    <div class="direitos">
        <div class="ano">@2021. Todos os direitos reservados</div>
        <div class="creditos"><small>desenvolvido por linkedin/dev-icaroglauco</small></div>
    </div>
</footer>

<style>
    footer{
        width: 100%;
        height: 400px;
        background: white;
        border-top: solid 2px rgba(0,0,0,0.05);
        display: grid;
        grid-template-rows: 70px auto 50px;
        margin-top: 100px;
    }
    .top{
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .nav{
        display: flex;
        grid-gap: 100px;
        padding-left: 60px;
        padding-top: 50px;
    }
    .nav li{
        list-style: square;
    }
    .logo{
        height: 100%;
        padding: 15px;
        display: flex;
        grid-gap: 50px;
    }
    .logo img{
        height: 100%;
    }
    .logo h2{
        line-height: 50px;
    }
    .direitos{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .direitos > *{
        margin: 10px
    }
</style>