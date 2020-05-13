import React from "react"

const Header = props => {
    return(
        <div className="row">
            <div className="col-12">
                <p style={{fontSize: "30px"}}>
                    <button className="btn btn-link" style={{fontSize: "20px"}}>Manage Players</button>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <button className="btn btn-link" style={{fontSize: "20px"}}>Manage Player Status</button>
                </p>
            </div>
        </div>
    )
}

export default Header