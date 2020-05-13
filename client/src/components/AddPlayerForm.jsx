import React, { useState } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const AddPlayerForm = props => {

    const { flag, setFlag } = props

    const [name, setName] = useState("")
    const [preferredPosition, setPreferredPosition] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/player", {
            name: name,
            preferredPosition: preferredPosition
        })
            .then(response => {
                console.log(response)
                if (flag){setFlag(false)}
                else{setFlag(true)}
                navigate("/players/list")
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
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
                                <label>Player Name:&nbsp;
                                {
                                    errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                                }
                                </label>
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