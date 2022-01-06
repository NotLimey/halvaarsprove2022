import { Link } from "react-router-dom";
import { NotFound as NotFoundImage } from "../Assets/Images/index";

const NotFound = () => {
    return (
        <section className="notfound-page">
            <img src={NotFoundImage} alt="404 not found" />
            <h1>Oops, there is nothing to see here :/</h1>
            <Link to="/">Get back to safe ground</Link>
        </section>
    );
}

export default NotFound;