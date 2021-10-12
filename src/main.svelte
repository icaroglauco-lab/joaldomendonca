<script>
    import router from "page"

    import { setContext } from "svelte";
    import Data from './mockdata.json';
    
    import Header from "./componentes/header.svelte";
    import Footer from "./componentes/footer.svelte";
    import LandingHeader from './componentes/HomeHeader.svelte';

    import HomeContent from './contents/home.svelte';
    import SingleProductContent from './contents/singleProduct.svelte';
    import ListagemContent from './contents/listagem.svelte';

    let mockdata = Data;

    let header;
    let content;

    // routes
    router('/', () => {
        header = LandingHeader;
        content = HomeContent;
    })
    router('/imovel/:id', (context) => {
        header = Header;
        content = SingleProductContent;
        setContext('product data', mockdata.propriedades.find(d => d.id === parseInt(context.params.id)))
    })
    router('/busca/', () => {
        header = Header;
        content = ListagemContent;
    })
    
    router.start()

</script>

<svelte:component this={header} />
<svelte:component this={content} />

<Footer></Footer>

<style>
    :global(body){
        margin: 0;
        padding: 0;
        background-color: #f7f7f7;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    :global(p){
        color: rgb(75, 75, 75)
    }
</style>