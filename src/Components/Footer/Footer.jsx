import React from "react"
import Wb from "./ImagensFooter/wb.png"
import Github from "./ImagensFooter/github.png"
import Linkedin from "./ImagensFooter/linkedin.png"
import * as S from "./FooterStyle.jsx"


function Footer() {
    return (
        <footer>

            <S.PrimeiraSectionFooter>
                <img src={Wb} alt="" />
                <S.Ul>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.Ul>

                <S.Div>
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                </S.Div>

            </S.PrimeiraSectionFooter>

            <S.SegundaSectionFooter>
                <p>© 2024 Cartoon Network</p>
            </S.SegundaSectionFooter>

        </footer>
    )
}

export default Footer