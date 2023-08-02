import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import PopOver5 from './PopOver5'

const Page5 = () => {

    useEffect(() => {
        document.title = "About || LearnWith Atique"
    }, [])

    return (

        <div style={{
            display: "flex", flexDirection: "column", margin: "20px",
            alignItems: "center", gap: "10px"
        }}>
            <h1>About Page</h1>

            {/* <Link to="/"><button type="button" class="btn btn-primary">Go To 1st Page</button></Link>
            <Link to="/page2"><button type="button" class="btn btn-success">Go To 2nd Page</button></Link>
            <Link to="/page3"><button type="button" class="btn btn-secondary">Go To 3rd Page</button></Link>
            <Link to="/page4"><button type="button" class="btn btn-danger">Go To 4th Page</button></Link> */}

            <PopOver5 />

        </div>



    )
}

export default Page5
