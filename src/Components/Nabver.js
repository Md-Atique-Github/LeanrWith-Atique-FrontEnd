import React from 'react'
import { NavbarBrand, Navbar } from 'reactstrap'

const Nabver = () => {
  return (
    <Navbar
      className="my-2"
      color="dark"
      dark
    >
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZy0_TDAiWjy3h5ZNx2ozcuPClQwpMjTvPkw&usqp=CAU"
          style={{
            height: 75,
            width: 80,
            marginRight: 20
          }}
        />
        LearnWith Atique
      </NavbarBrand>
    </Navbar>
  )
}

export default Nabver
