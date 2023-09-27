import Livre from "./Livre";

function Bibliotheque({livres}) {
    return <div className="biblio">
        {livres.map(e => 
            <Livre key={e.id} url={e.url} titre={e.titre} prix={e.prix} />
            )}
    </div>;
}

export default Bibliotheque;