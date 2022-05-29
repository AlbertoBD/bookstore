import React from 'react'
import "./what.css"
import what from "../../images/what.png"
import what2 from "../../images/what2.png"
import what3 from "../../images/what3.png"

export default function What() {
  return (
      <>
      <div className="bg-warning">
        <div className="container-sm text-center mt-5 pt-5">
            <h1 className="what-h1 mb-5">Ce gasesti aici?</h1>
            <div className="what-div d-flex justify-content-around">
                <div className="what-text text-center align-self-center">
                    <h2 className="what-h2">lorem ipsum</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam obcaecati maxime aut optio architecto autem voluptates animi quos illo eos.</p>
                </div>
                <div className="what-photo">
                    <img className="what-img" src={what} alt="what" />
                </div>
            </div>
            <div className="what-div d-flex justify-content-around">
                <div className="what-text text-center align-self-center">
                    <h2 className="what-h2">lorem ipsum</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam obcaecati maxime aut optio architecto autem voluptates animi quos illo eos.</p>
                </div>
                <div className="what-photo">
                    <img className="what-img" src={what2} alt="what" />
                </div>
            </div>
            <div className="what-div d-flex justify-content-around">
                <div className="what-text text-center align-self-center">
                    <h2 className="what-h2">lorem ipsum</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam obcaecati maxime aut optio architecto autem voluptates animi quos illo eos.</p>
                </div>
                <div className="what-photo">
                    <img className="what-img" src={what3} alt="what" />
                </div>
            </div>
            
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffc107" fill-opacity="1" d="M0,96L60,101.3C120,107,240,117,360,138.7C480,160,600,192,720,186.7C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </>
  )
}
