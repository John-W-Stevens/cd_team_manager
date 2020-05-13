import React, { useState } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const AddPlayerForm = props => {
    const [name, setName] = useState("")
    const [preferredPosition, setPreferredPosition] = useState("")

    const onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/player", {
            name: name,
            preferredPosition: preferredPosition
        })
            .then(response => console.log(response))
            .then(navigate("/players/list"))
            .catch(error => console.log("There was an error: ", error))
    }

    return(
        <div className="row">
            <div className="col-10 offset-1" style={{border: "1px solid lightgrey", borderRadius: "7px"}}>
                <div className="row">
                    <div className="col-12">
                        <h3>Add Player</h3>
                    </div>
                    <div className="col-12">
                        <form onSubmit={ onSubmit }>
                            <div className="form-group">
                                <label>Player Name:</label>
                                <input onChange={e=>setName(e.target.value)} type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Preferred Position:</label>
                                <input onChange={e=>setPreferredPosition(e.target.value)} type="text" className="form-control"/>
                            </div>
                            <div className="form-group text-right">
                                <button className="btn btn-success" style={{width: "100px"}}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPlayerForm