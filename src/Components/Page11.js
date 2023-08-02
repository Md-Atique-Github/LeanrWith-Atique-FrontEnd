import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText, Button,
} from 'reactstrap';

const Page11 = () => {

    useEffect(() => {
        document.title = "Home || LearnWith Atique"
    }, [])

    return (
        <div>

            <div style={{
                display: "flex", flexDirection: "column", margin: "20px",
                alignItems: "center", gap: "10px"
            }}>

                <h3>Home Page</h3>

                <Card
                    style={{
                        width: '27rem',
                        height: '5rem'

                    }}
                >
                    <img
                        alt="Sample"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNEzwRF5ZJEpXbF5kL_pYngCGapTK8LyO7Zg&usqp=CAU"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Learn Online With Atique
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            FullStack Development
                        </CardSubtitle>
                        <CardText>
                            Learn fullStack development with Atique . It's backend is on Springboot and frontend is on React.js:
                        </CardText>
                        <Link to="/Page2"><Button outline>
                            Getting Start
                        </Button></Link>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Page11