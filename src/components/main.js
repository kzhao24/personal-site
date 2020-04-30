import React from "react"
import construction from "../images/construction.png";
import Layout from "./layout";
import linkedin from "../images/linkedin.png";
import profile from "../images/profile.jpg";

export default () => (
    <Layout>
        <div>
            {/* <Link to="/contact/">Contact</Link> */}
          <h1>Hey, I'm Kevin Zhao!</h1>
          <img src={profile} alt="Profile" />
        </div>
        <div>
          <a href="https://www.linkedin.com/in/kevinkzhao/">
            <img src={linkedin} alt="LinkedIn" width="50" height="50" />
          </a>
        </div>
    </Layout>
)
