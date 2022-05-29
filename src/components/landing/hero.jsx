import React from 'react'
import "./hero.css"
import heroImg from "../../images/hero.png"

export default function Hero() {
  return (
    <>
    <div className="bg-primary ">
        <div className="container-sm d-flex flex-md-row justify-content-center align-items-center flex-wrap flex-sm-column">
            <div className="hero-text mt-5">
                <h1 className="mb-4">Cumpara carti de pe Carturesti mai ieftin decat pe pe Carturesti</h1>
                <a href="/register"><button class="btn btn-login">Creaza cont gratuit</button></a>
            </div>

            <div>
                <img src={heroImg} alt="hero" className="hero-img" />
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fill-opacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg>
    </>
  )
}
