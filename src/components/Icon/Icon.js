import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faWhatsapp, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faFacebook, faWhatsapp, faInstagram);
}
export default initFontAwesome;