import React from 'react'
import info from "../../images/info.png"
import info2 from "../../images/info2.png"
import info3 from "../../images/info3.png"
import "./info.css"

export default function Info() {
  return (
      <div className="container-sm text-center">
        <h1 className="info-h1">De ce sa ne alegi?</h1>
        <div className="d-flex section-info mt-4">
            <div className="info mb-5">
                <img className="info-img" src={info} alt="info" />
                <h2 className="info-header mb-4 mt-2">Varietate</h2>
                <p className="info-text">Ai acces la peste 3.000.000 de carti la un click distanta</p>
            </div>
            <div className="info mb-5">
                <img className="info-img" src={info2} alt="info" />
                <h2 className="info-header mb-4 mt-2">Diversitate</h2>
                <p className="info-text">Cartile oferite pe platforma noastra sunt oferite in 50+ limbaje diferite</p>
            </div>
            <div className="info">
                <img className="info-img" src={info3} alt="info" />
                <h2 className="info-header mb-4 mt-2">Calitate</h2>
                <p className="info-text">Iti oferim carti de calitate scrise de specialisti in toate domeniile</p>
            </div>
        </div>
    </div>
  )
}
