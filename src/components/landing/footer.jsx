import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
      <>
        <footer className='bg-primary footer'>
            <div className="container-sm text-center pt-5">
                <p className="pb">Bookstore 2022</p>
                <ul className="footer-ul pb-2">
                    <li>Termeni si conditii</li>
                    <li>Contacteaza-ne</li>
                </ul>
            </div>
        </footer>
      </>
  )
}
