import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./Links.css"

const Links = () => {

    return (
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/calilcakes/">
                        <FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/5562995114347?text=calilcakes">
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} /> Whatsapp
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/Calil-Cakes-1165477743510541">
                        <FontAwesomeIcon icon={['fab', 'facebook']} /> Facebook
                    </a>
                </li>
            </ul>
        </section>

    )
}

export default Links;