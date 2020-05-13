import React, { useState } from "react"
import { navigate } from "@reach/router"


const ListAddView = props => {

    const loadList = () => navigate("/players/list")
    const loadAddPlayerForm = () => navigate("/players/addplayer")

    return(
        <div className="container" style={{border: "1px solid lightgrey", borderRadius: "5px", paddingBottom: "40px"}}>
            <div className="row">
                <div className="col-12">
                    <p style={{fontSize: "30px"}}>
                        <button onClick={ loadList } className="btn btn-link" style={{fontSize: "20px"}}>List</button>&nbsp;&nbsp;|&nbsp;&nbsp;
                        <button onClick={ loadAddPlayerForm } className="btn btn-link" style={{fontSize: "20px"}}>Add Player</button>
                    </p>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default ListAddView