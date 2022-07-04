import Requisicao from "../controllers/requisicao.js";

class Modelo {



    static async montarcard() {
        const noticias = await Requisicao.requisicao()
        console.log(noticias)
        noticias.forEach(element => {
            const sectionArtigos = document.getElementById("SectionArtigos")


            const divMateria = document.createElement("div")
            divMateria.classList.add("divMateria")


            const divCategoria = document.createElement("div")
            divCategoria.classList.add("divCategoria")

            const tituloCategoria = document.createElement("h3")
            tituloCategoria.classList.add("tituloCategoria")
            tituloCategoria.innerText = element.categoria


            const titulo = document.createElement("h2")
            titulo.classList.add("titulo")
            titulo.innerText = element.titulo


            const resumo = document.createElement("p")
            resumo.classList.add("resumo")
            resumo.innerText = element.resumo

            const fonte = document.createElement("span")
            fonte.classList.add("fonte")
            fonte.innerText = element.fonte

            /*  const divTexto = document.createElement("div")
             divTexto.classList.add("divTexto") */

            const img = document.createElement("img")
                /*  img.classList.add("imgFull") */
            img.src = element.imagem


            divCategoria.append(tituloCategoria)
                /* divTexto.append(divCategoria, titulo, resumo, fonte) */
            divMateria.append(divCategoria, titulo, resumo, fonte)

            sectionArtigos.append(divMateria)

        });
    }




}



export default Modelo