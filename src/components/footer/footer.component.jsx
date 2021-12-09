import React from "react";
import './footer.styles.scss'

const Footer = () => (
    <section className='footer'>
        <div className='footer__frame'>
            
            <ul className='footer__frame--about-us'>
                <li>Poznaj nas</li>
                <li>O nas</li>
                <li>Lokacje Salonów</li>
                <li>Kariera</li>
            </ul>
    
            <ul className='footer__frame--delivery'>
                <li>Dostawa</li>
                <li>Koszty wysyłek</li>
                <li>Lista punktów odbioru</li>
                <li>Formy płatności</li>
            </ul>
    
            <ul className='footer__frame--statute'>
                <li>Regulamin</li>
                <li>Regulamin Book World</li>
                <li>Polityka Prywatności</li>
                <li>Klauzule informacyjne RODO</li>
            </ul>
    
            
        </div>
            <div className='footer--phone-number'>Wsparcie klienta: 111-111-111</div>
    </section>
)

export default Footer;