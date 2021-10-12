<script>
    let y;
    const SCROLLY_LIMIT = 400
</script>

<svelte:window bind:scrollY={y}/>

<nav style={`background-color: rgba(240, 255, 255, ${y/SCROLLY_LIMIT})`}>
    <div class="logo">
        <img src="https://scontent.fgnm1-1.fna.fbcdn.net/v/t39.30808-6/218311632_115886290761239_2552422985161919335_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHex3HyT4zOZOfcvCa8t6akpMWZPz9MUdCkxZk_P0xR0BDcZx1BeLmcHkbu-UJcTlBEQ6dWGmyF-Mmus_xRImbh&_nc_ohc=A_SSoTxx4b4AX8g8N-s&_nc_ht=scontent.fgnm1-1.fna&oh=605e47df208c236624838f1c08bff4ce&oe=616A1FA7" alt="">
    </div>
    <ul class="links">
        <li>Início</li>
        <li>Propriedades</li>
        <li>Contato</li>    
    </ul>
    <ul class="contato">
        <li>
            <i class="fab fa-whatsapp"></i>
            (xx) xxxx-xxxx
        </li>
    </ul>
</nav>

<style>
    nav{
        top: 0%;
        width: 100%;
        position: fixed;
        display: flex;
        flex-direction: row;
        height: 70px;
        justify-content: space-between;
        z-index: 100;
        /* background-color: rgba(240, 255, 255, 0.973); */
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 15px;
    }
    .links{
        width: 70%;
        min-width: 200px;
        grid-gap: 30px;
    }
    .logo{
        display: flex;
        height: 100%;
        padding-left: 15px;
    }
    .logo img{
        height: 75%;
        margin: auto;
    }
    .contato{
        margin-right: 25px;
    }
</style>