import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

const Page2 = () => {
    return (

        <div style={{
            display: "flex", flexDirection: "column", margin: "20px",
            alignItems: "center", gap: "10px"
        }}>
            <h1>Second Page</h1>

            <Card className="my-2">
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/180"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card Title
                    </CardTitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </CardText>
                </CardBody>
            </Card>

            <Link to="/"><button type="button" class="btn btn-primary">Go To 1st Page</button></Link>
            <Link to="/page3"><button type="button" class="btn btn-secondary">Go To 3rd Page</button></Link>
            <Link to="/page4"><button type="button" class="btn btn-success">Go To 4th Page</button></Link>
            <Link to="/page5"><button type="button" class="btn btn-danger">Go To 5th Page</button></Link>
        </div>

    )
}

export default Page2
