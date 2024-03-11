import React, {useState} from "react"
import Dexter from "./ImagensProgramacao/dexter.png"
//import VacaFrango from "./ImagensProgramacao/vacaefrango"
import Du from "./ImagensProgramacao/du.png"
import Coragem from "./ImagensProgramacao/coragem.png"

function Programacao(){

const [desenhos, setDesenhos] = useState([
    {nome: "O laboratório de Dexter", hora: "7:00h", imagem: Dexter},
    // {nome: "A vaca e o frango", hora: "8:00h", imagem: VacaFrango },
    {nome: "Du, Dudu e Edu", hora: "9:00h", imagem: Du},
    {nome: "Coragem, o cão covarde", hora: "10h", imagem: Coragem }
])

    return(
        <section>
            {desenhos.map((item)=>(
              <div>
                <h2> {item.nome} </h2>
                <h2> {item.hora} </h2>
                <img src={item.imagem} alt="" />
              </div>
            ))}
        </section>
    )
}

export default Programacao