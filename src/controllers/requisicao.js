class Requisicao {

    static async requisicao() {
        const dados = await fetch('https://kenzie-news-api.herokuapp.com/api/news')
            .then(response => response.json())
            .then((data) => data)
            .catch(err => err)

        console.log(dados)
        return dados

    }
}


export default Requisicao