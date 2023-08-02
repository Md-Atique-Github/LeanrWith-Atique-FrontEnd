import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImgOverlay, CardTitle, CardImg, CardText } from 'reactstrap';

const Page3 = () => {
    return (
        <div style={{
            display: "flex", flexDirection: "column", margin: "20px",
            alignItems: "center", gap: "10px"
        }}>
            <h1>Third Page</h1>

            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/270?grayscale"
                    style={{
                        height: 270
                    }}
                    width="100%"
                />
                <CardImgOverlay>
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
                </CardImgOverlay>
            </Card>

            <Link to="/"><button type="button" class="btn btn-primary">Go To 1st Page</button></Link>
            <Link to="/page2"><button type="button" class="btn btn-secondary">Go To 2nd Page</button></Link>
            <Link to="/page4"><button type="button" class="btn btn-success">Go To 4th Page</button></Link>
            <Link to="/page5"><button type="button" class="btn btn-danger">Go To 5th Page</button></Link>
        </div>
    )
}

export default Page3
