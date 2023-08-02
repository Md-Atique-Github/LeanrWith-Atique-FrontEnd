import React, { useState, useEffect } from "react";
import Page1 from "./Page1";
import base_url from "../Api/BootApi";
import axios from 'axios';
import { toast } from "react-toastify";


const Courses = () => {

    useEffect(() => {
        document.title = "View-Course || LearnWith Atique"
    }, []);


    // Call server to get all Courses

    const getAllCourses = () => {
        axios.get(`${base_url}/getAll-course`).then(
            (response) => {

                console.log(response.data);
                toast.success("Courses has been loaded")
                setKourses(response.data);

            }, (error) => {

                // For Error 
                console.error(error);
                toast.error("Request Failed for Courses")

            }
        )
    }

    useEffect(() => {
        getAllCourses();
    }, []);

    const [kourses, setKourses] = useState([])

    const updateCourse = (id) => {
        setKourses(kourses.filter((c) => c.id !== id))
    }

    return (
        < >
            <div>
                <div className="text-center">
                    <h4>Courses</h4>
                    <p>List Of Courses Are As Follows</p>
                </div>

                {
                    kourses.length > 0 ? kourses.map((item) => <Page1 key={item.id} course={item} update={updateCourse} />) : "No Course Available"
                }

                {/* <Page1 course={{title:"Django",description:"This is Django course"}}/>
    <Page1 course={{title:"Java",description:"This is Java course"}}/>
    <Page1 course={{title:"C#",description:"This is C# course"}}/>
    <Page1 course={{title:"Springboot",description:"This is Springboot course"}}/> */}

            </div>
        </>

    )
}

export default Courses