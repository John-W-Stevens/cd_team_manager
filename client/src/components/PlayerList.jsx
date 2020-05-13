import React, {useState, useEffect} from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const PlayerList = props => {

    const { flag, setFlag } = props
    const [players, setPlayers] = useState([])

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                let allPlayers = response.data.Players
                setPlayers(allPlayers)
            })
            .catch(error => console.log("There was an error: ", error))
    }, [flag])

    const onDelete = e => {
        axios.delete(`http://localhost:8000/api/players/${e.target.value}`)
            .then(response => {
                console.log(response)
                if (flag){setFlag(false)}
                else {setFlag(true)}
            })
            .catch(error => console.log("There was an error: ", error))
    }

    return(
        <div className="row">
            <div className="col-12">
                <table className="table table-sm table-hover table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Player Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map( (player, i) => 
                                <tr key={i}>
                                    <td>{player.name}</td>
                                    <td>{player.preferredPosition}</td>
                                    <td><button onClick={ onDelete } value={player._id} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerList