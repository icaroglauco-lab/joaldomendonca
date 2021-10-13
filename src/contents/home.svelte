<script>
    import Card from '../componentes/imovelCard.svelte';

    import Carrousel from "@beyonk/svelte-carousel";
    import FullData from '../mockdata.json';

    let PropriedadesEmDestaque = FullData.propriedades.sort( (a, b) => 
        a.rank - b.rank
    ).slice(0, 5);

    console.log(PropriedadesEmDestaque);

</script>

<h4>
    Propriedades em destaque
</h4>

<Carrousel perPage={3}>
    {#each PropriedadesEmDestaque as Propriedade}
        <div class="slide-content">
            <Card data={Propriedade}/>
        </div>
    {/each}
</Carrousel>

<style>
    :global(.slides){
    }
    .slide-content{
        width: fit-content;
        margin: 0 auto;
    }
</style>