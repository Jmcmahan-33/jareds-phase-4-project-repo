import { useContext } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./context/user"

function Doctors() {
    const {} = useContext(UserContext)
    const params = useParams()

    return (

        <h1>Doctors:</h1>
    )
}

export default Doctors