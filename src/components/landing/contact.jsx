import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
      <div className="form-contact">
        <div className="container-sm text-center">
            <h1 className="info-h1">Contacteaza-ne!</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Nume</label>
                    <input type="text" className="form-control" id="name" placeholder="Nume" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mesaj</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Trimite</button>
            </form>
        </div>
      </div>
  )
}
