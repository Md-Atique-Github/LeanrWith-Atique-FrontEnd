import React from 'react'
// import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Card,
  // CardBody, 
  CardTitle,
  //  CardSubtitle,
  CardText, Button, Row, Col, Container
} from 'reactstrap';
import axios from 'axios';
import base_url from '../Api/BootApi';
import { toast } from 'react-toastify';



// const handleClick = () => {

//   toast.success("Success");
//   toast.error("Error notification.");
//   toast.info("Info notification.");
//   toast.warning("Warning!");
//   toast.dark("Dark!");

// }

const Page1 = (props) => {
  // const { title, description } = props.course;

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/delete-course/${id}`).then(
      (response) => {
        toast.success("Deleted Successfully")
        props.update(id);
      }, (error) => {
        toast.error("Error in Deleting Course")
      }
    )
  }

  return (
    <>

      <div className='text-center' >
        <Row >
          <Col sm="12" >
            <Card body>
              <CardTitle tag="h5">
                {props.course.title}
              </CardTitle>
              <CardText>
                {props.course.description}
              </CardText>
              <Container>
                <Button color='warning' style={{ marginRight: 5 }} >Update</Button>
                <Button onClick={() => { deleteCourse(props.course.id) }} color='danger'>Delete</Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </div >



      {/* <div style={{
        display: "flex", flexDirection: "column", margin: "20px",
        alignItems: "center", gap: "10px"
      }}> */}

      {/* <h3>First Page</h3> */}

      {/* <Card
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
          />
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card> */}


      {/* <Link to="/page2"><button type="button" class="btn btn-primary">Go To 2nd Page</button></Link>
        <Link to="/page3"><button type="button" class="btn btn-secondary" onClick={handleClick}>Go To 3rd Page</button></Link>
        <Link to="/page4"><button type="button" class="btn btn-success">Go To 4th Page</button></Link>
        <Link to="/page5"><button type="button" class="btn btn-danger">Go To 5th Page</button></Link>

        <hr /> */}
      {/* </div> */}
    </>
  )
}

export default Page1

