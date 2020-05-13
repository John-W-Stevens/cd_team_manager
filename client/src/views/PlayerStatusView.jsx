import React, { useState } from "react"
import { navigate } from "@reach/router"


const PlayerStatusView = props => {

    const [game, setGame] = useState([])
   
    const loadGame1 = () => navigate("/status/game/1")
    const loadGame2 = () => navigate("/status/game/2")
    const loadGame3 = () => navigate("/status/game/3")

    return(
        <div className="container" style={{border: "1px solid lightgrey", borderRadius: "5px", paddingBottom: "40px"}}>
            <div className="row">
                <div className="col-12 text-center">
                    <p style={{fontSize: "30px"}}>
                        <button onClick={loadGame1} className="btn btn-link" style={{fontSize: "20px"}}>Game 1</button>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <button onClick={loadGame2} className="btn btn-link" style={{fontSize: "20px"}}>Game 2</button>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <button onClick={loadGame3} className="btn btn-link" style={{fontSize: "20px"}}>Game 3</button>
                    </p>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default PlayerStatusView