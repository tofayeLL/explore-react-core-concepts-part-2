import { useState } from "react"


export default function Team() {
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleReduce = () => {

        setTeam(team - 1);
    }
    const teamStyle = {
        border: '2px solid green',
        padding: '8px',
        borderRadius: '10px',
        marginBottom: '5px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>player add</button>
            <button onClick={handleReduce}>player remove</button>
        </div>
    )
}