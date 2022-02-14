import React from "react"
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
            <p>
              Lo~rem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              accusamus amet aperiam cupiditate deleniti dolorem doloremque
              dolorum exercitationem explicabo fugiat impedit itaque laboriosam
              minus nam nemo, numquam provident rerum voluptates?
            </p>
            <button className="btn btn-hero">Login/Register</button>
          </h1>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </main>
  )
}

export default Landing
