<script>
    import { onMount } from "svelte";


    onMount(()=>{
        gsap.from(".hero", {duration: 2, scale: 0.5})
    }) 
</script>

<header>
    <div class="hero">
        <h1>
            Joaldo Mendonça
        </h1>
    
        <p>
            💢 PRÉ LANÇAMENTO 💢
            Península do Gavião 🦅
        </p>
    
        <p>
            Não perca a oportunidade e garanta logo sua chácara/sítio nas margens da barragem de Anagé!!
        </p>
    
        <p>
            Entre em contato conosco e faça seu cadastro!!
            Whatsapp: 77 9 8849 4059
            Fixo: 77 3422 2047
        </p>
    
    </div>
</header>


<style>
    header{
        background-image: url(https://media.istockphoto.com/photos/an-asian-chinese-family-moving-into-new-house-and-received-the-house-picture-id1265643738);
        background-size: cover;
        padding: 25vh;
    }
    .hero{
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    .hero h1{
        padding-right: 5vh;
        margin-left: auto;
    }
    .hero p{
        margin-left: auto;
        width: 400px;
    }
</style>