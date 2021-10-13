<script>
    let y;
    const SCROLLY_LIMIT = 400
    import { link } from "svelte-navigator";

</script>

<svelte:window bind:scrollY={y}/>

<nav style={`background-color: rgba(240, 255, 255, ${y/SCROLLY_LIMIT})`}>
    <a class="logo" use:link  href="/">
        <img src="https://scontent.fgnm1-1.fna.fbcdn.net/v/t39.30808-6/218311632_115886290761239_2552422985161919335_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHex3HyT4zOZOfcvCa8t6akpMWZPz9MUdCkxZk_P0xR0BDcZx1BeLmcHkbu-UJcTlBEQ6dWGmyF-Mmus_xRImbh&_nc_ohc=A_SSoTxx4b4AX8g8N-s&_nc_ht=scontent.fgnm1-1.fna&oh=605e47df208c236624838f1c08bff4ce&oe=616A1FA7" alt="">
    </a>
    <ul class="links">
        <li><a use:link href="/">Início</a></li>
        <li><a use:link href="/">Propriedades</a></li>
        <li><a use:link href="/">Contato</a></li>    
    </ul>
    <ul class="contato">
        <li>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=777777777777&text=..."><i class="fab fa-whatsapp"></i>
            (xx) xxxx-xxxx</a>
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
        border-bottom: solid  0.5px rgba(0,0,0,0.05);
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