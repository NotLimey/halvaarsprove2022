import { Link } from "react-router-dom";
import { NotFound as NotFoundImage } from "../Assets/Images/index";

const NotFound = () => {
    return (
        <section className="notfound-page">
            <img src={NotFoundImage} alt="404 not found" />
            <h1>Oops, her er det ingenting å se :/</h1>
            <Link to="/">Gå tilbake til hovedsiden</Link>
        </section>
    );
}

export default NotFound;