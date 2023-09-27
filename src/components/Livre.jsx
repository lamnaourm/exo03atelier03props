import Image from "./Image";
import Prix from "./Prix";
import Titre from "./Titre";

function Livre({url, titre, prix}) {
    return <div className="livre">
        <Image image={url} titre={titre}/>
        <Titre titre={titre}/>
        <Prix prix={prix}/>
    </div>;
}

export default Livre;