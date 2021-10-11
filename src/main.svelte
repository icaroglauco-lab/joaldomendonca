<script>
    import Header from "./componentes/header.svelte";
    import Footer from "./componentes/footer.svelte";

    import LandingHeader from './componentes/HomeHeader.svelte';
    import { setContext } from "svelte";
    import Data from './mockdata.json';

    import router from "page"

    let mockdata = Data;

    let state = setContext('state', mockdata);

    let page;

    router('/', () => page = LandingHeader)
    router.start()

</script>

<svelte:component this={page} />

<Footer></Footer>