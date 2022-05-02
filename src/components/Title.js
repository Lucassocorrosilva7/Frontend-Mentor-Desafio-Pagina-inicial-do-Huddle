import React from 'react'
import "./TitleStyles.css"
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Title() {
  return (
    <article class="col-2">
    <h1 class="col-2__heading">build the community your fans will love</h1>
      <h6 class="col-2__text">
        Huddle re-imagines the way we build communities.
        You have a voice, but so does your audience. Create connectios with yout users you engage in genuine discussion.
      </h6>
      <button class="col-2__btn--resgister">Register</button>
    <div class="col-2__links">
      <i><FaFacebookF/></i>
      <i><FaTwitter/></i>
      <i><FaInstagram/></i>
    </div>
  </article>
  )
}

export default Title