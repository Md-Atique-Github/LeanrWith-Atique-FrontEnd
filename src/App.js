
import './App.css';
// import Page1 from './Components/Page1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page5 from './Components/Page5';
// import Page4 from './Components/Page4';
// import Page3 from './Components/Page3';
// import Page2 from './Components/Page2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nabver from './Components/Nabver';
import Courses from './Components/Courses';
// import CourseForm2 from './Components/CourseForm2';
import { Container, Col, Row } from 'reactstrap';
import Menu from './Components/Menu';
import CourseForm2 from './Components/CourseForm2';
import Page11 from './Components/Page11';
import Contact from './Components/Contact';




function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Nabver />


        {/* <Router>

        <Nabver />

        <Routes> */}

        {/* not important <Route  path="/" element={<Page1 course={{title:"Django",description:"This is Django course"}}/>} /> */}

        {/* <Route path="/" element={<Courses
           NOT IMPORTANT course={{title:"Django",description:"This is Django course"}}
          />} /> */}
        {/* <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />

        </Routes>

        <CourseForm2 />

      </Router> */}



        <Container>

          <Row>

            <Col md={4}>

              <Menu />

            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" element={<Page11
                // NOT IMPORTANT course={{title:"Django",description:"This is Django course"}}
                />} />
                {/* <Route path="/page2" element={<Page2 />} /> */}
                <Route path="/page2" element={<CourseForm2 />} />
                {/* <Route path="/page3" element={<Page3 />} /> */}
                <Route path="/page3" element={<Courses />} />
                <Route path="/page4" element={<Contact />} />
                <Route path="/page5" element={<Page5 />} />
              </Routes>

            </Col>

          </Row>

        </Container>
      </Router>
    </>
  );
}

export default App;
