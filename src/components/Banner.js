import React from 'react'
import BannerImg from "../images/illustration-mockups.svg"
import "./Banner.css"

function Banner() {
  return (
    <article class="col-1">
    <img class="col-1__img" src={BannerImg} alt="mockups" />
  </article>
  )
}

export default Banner