import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

const Menu = () => {
    return (
        <>
            <div style={{
                display: "flex", flexDirection: "column", margin: "20px",
                alignItems: "center", gap: "10px"
            }} >

                <h3>Dashboard</h3>


                <ListGroup>
                    <ListGroupItem ><Link className='list-group-item list-group-item-action' to="/">Home</Link></ListGroupItem>
                    <ListGroupItem ><Link className='list-group-item list-group-item-action' to="/page2">Add Course</Link></ListGroupItem>
                    <ListGroupItem ><Link className='list-group-item list-group-item-action' to="/page3">View Course</Link></ListGroupItem>
                    <ListGroupItem ><Link className='list-group-item list-group-item-action' to="/page4">Contact</Link></ListGroupItem>
                    <ListGroupItem ><Link className='list-group-item list-group-item-action' to="/page5">About</Link></ListGroupItem>
                </ListGroup>
                <hr />
            </div >
        </>
    )
}

export default Menu