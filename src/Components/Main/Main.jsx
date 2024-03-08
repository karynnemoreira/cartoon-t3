import React from "react"
import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"
import * as S from "./MainStyle"

function Main() {
    return (
        <main>
            <S.StyledSection>
                <img src={Scooby} alt="Scooby" />
                <img src={Ben10} alt="Ben10" />
                <img src={Looney} alt="Looney" />
            </S.StyledSection>

        </main>
    )
}

export default Main