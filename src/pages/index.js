import React, { Fragment, useEffect } from "react"
import SEO from "../components/seo"
import { navigate } from "gatsby"
import logo1 from "../images/intro-logo.svg"
import logo2 from "../images/intro-text.svg"

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate("/Login")
    }, 2000)
  }, [])
  return (
    <Fragment>
      <SEO
        title="Leave Tracker"
        description="Gatsby is a React-based open source framework with performance, scalability and security built-in."
        keywords={["gatsby", "react"]}
      />
      <div id="loader">
        <div id="image_container">
          <div id="img1_cont">
            <img src={logo1} alt="img" id="image" />
          </div>
          <img src={logo2} alt="img" id="image2" />
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage
