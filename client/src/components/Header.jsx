import React from "react"
import { navigate } from "@reach/router"

const Header = props => {

    const loadList = () => navigate("/players/list")
    const loadStatus = () => navigate("/status/game/1")

    return(
        <div className="row">
            <div className="col-12">
                <p style={{fontSize: "30px"}}>
                    <button onClick={loadList} className="btn btn-link" style={{fontSize: "20px"}}>Manage Players</button>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <button onClick={loadStatus} className="btn btn-link" style={{fontSize: "20px"}}>Manage Player Status</button>
                </p>
            </div>
        </div>
    )
}

export default Header