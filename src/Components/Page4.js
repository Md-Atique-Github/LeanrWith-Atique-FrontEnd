import React from 'react'
import { Link } from 'react-router-dom'
import Corosel from './Corosel'

const Page4 = () => {
    return (
        <div style={{
            display: "flex", flexDirection: "column", margin: "20px",
            alignItems: "center", gap: "10px"
        }}>
            <h1>Fourth Page</h1>

            <Corosel />

            <Link to="/"><button type="button" class="btn btn-primary">Go To 1st Page</button></Link>
            <Link to="/page2"><button type="button" class="btn btn-success">Go To 2nd Page</button></Link>
            <Link to="/page3"><button type="button" class="btn btn-secondary">Go To 3rd Page</button></Link>
            <Link to="/page5"><button type="button" class="btn btn-danger">Go To 5th Page</button></Link>
        </div>
    )
}

export default Page4
