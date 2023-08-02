import React, { Fragment, useEffect, useState } from 'react'
import { Form, Label, FormGroup, Input, Container, Button } from 'reactstrap'
import axios from 'axios'
import base_url from '../Api/BootApi'
import { toast } from 'react-toastify'

const CourseForm2 = () => {

    useEffect(() => {
        document.title = "Add-Course || LearnWith Atique"
    }, [])

    const [course, setCourse] = useState({})

    const handleSubmit = (e) => {
        console.log(course);
        postCourses(course);
        e.preventDefault();
    };

    //call server to add the data
    const postCourses = (data) => {
        axios.post(`${base_url}/add-course`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course Added successfully")

            }, (error) => {
                console.log(error);
                console.log("success");
                toast.error('Error in Adding Course')
            })
    }

    return (

        <Fragment>

            <div className='text-center'>
                <h4>CourseForm2</h4>
                <h2>Course Details Form</h2>
            </div>

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="userId">
                        User ID
                    </Label>
                    <Input
                        id="userId"
                        name="userId"
                        placeholder="Enter UserId"
                        type="text"
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value })
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label>Course Title</label>
                    <Input id='title' type='text' placeholder='Enter Title '
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value })
                        }} />
                </FormGroup>

                <FormGroup>
                    <label>Course description</label>
                    <Input id='Description' type='textarea' placeholder='Enter Description'
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value })
                        }} />
                </FormGroup>

                <Container className='text-center'>
                    <Button type='submit' color='success' style={{ marginRight: 8 }}  >Add Course</Button>
                    <Button type='reset'>Clear Course</Button>
                </Container>

            </Form>

        </Fragment>
    )
}

export default CourseForm2