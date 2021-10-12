<script>
    export let data = {
            "id": 1,
            "rank": 1,
            "cliques": 0,
            "titulo": "Lote do empreendimento Rural 1",
            "status": "200 unidades disponíveis",
            "palavras-chave": ["rural", "loteamento"],
            "features": {
                "Área": "1000m2",
                "Escritura individualizada": true
            },
            "descrição": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet fermentum fermentum. Vivamus ut erat id lacus ultrices sodales. Praesent scelerisque vulputate nisi. Nunc eleifend, nunc sed ornare elementum, dolor eros pharetra risus, sed malesuada dui orci eu erat. Proin tempor quis lorem et lobortis. Mauris tincidunt elementum est. Nulla ultrices dolor sagittis ex sollicitudin, lacinia commodo ipsum mollis. Vestibulum semper, arcu nec ultrices vestibulum, arcu lectus egestas purus, sit amet porttitor dolor est eget metus. Morbi at erat vel libero tristique gravida. Nullam ac lectus fermentum, mollis nunc id, posuere ipsum.",
            "detalhes adicionais": {
                "Vista": "Para cidade",
                "Entradas": "Duas, pela cidade, e por dentro"
            },
            "endereço": "São Sebastião, Vitória da Conquista - BA",
            "log lat": [-15,-40.7198707],
            "fotos": [
                "https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816",
                "https://media.istockphoto.com/photos/aerial-view-of-residential-houses-at-autumn-american-neighborhood-picture-id1181134074",
                "https://media.istockphoto.com/photos/modern-houses-from-above-picture-id1255099614"
            ],
            "planos": {
                "termos": {
                    "1 ano fixo": 12,
                    "2 anos fixos": 24,
                    "3 anos fixos": 36,
                    "4 anos fixos": 48
                },
                "juros": 0.02,
                "preço a vista": 10000
            }
        }
</script>

<div class="container">
    <div class="fotografia">
        <img src={data.fotos[0]} alt="">
    </div>
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
                    {data["palavras-chave"].join(', ')}
                </span>
                <span>
                    {data.status}
                </span>
            </div>
        </div>
        <div class="conteudo">
            <div class="title">{data.titulo}</div>
            <div class="loc">{data.endereço}</div>
            <div class="data"></div>
            <div class="features">
                
            </div>
            <div class="actions">
                <div class="preco"></div>
                <div class="botoes"></div>
            </div>
        </div>
    </div>
</div>