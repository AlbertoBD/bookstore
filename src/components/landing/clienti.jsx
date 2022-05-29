import React from 'react'
import "./clienti.css"
import client from "../../images/client.png"

export default function Clienti() {
  return (
    <>
      <div className="container-sm text-center pb-5 mb-5 client-section">
        <h1 className="clienti-h1 mb-5">Ce spun clientii?</h1>
        <div className="client-div">
          <div className="client-photo">
            <img src={client} alt="client-img" className="client-img" />
          </div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ad accusantium perspiciatis maxime voluptate assumenda, culpa iusto temporibus iste eius.</p>
          </blockquote>
        </div>
      </div>
    </>
  )
}
