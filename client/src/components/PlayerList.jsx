import React, {useState, useEffect} from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const PlayerList = props => {

    const [players, setPlayers] = useState([])

    useEffect( ()=> {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                let allPlayers = response.data.Players
                setPlayers(allPlayers)
            })
            .catch(error => console.log("There was an error: ", error))
    }, [])

    const getId = player => `${player._id}`

    const onDelete = player => {
        axios.delete(`http://localhost:8000/api/player/${getId(player)}`)
            .then(navigate("/players/list"))
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
                                    <td><button onClick={ onDelete(player) } className="btn btn-danger btn-sm">Delete</button></td>
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