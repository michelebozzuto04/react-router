import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <div className="jumbotron">
            <div>
                <h1>WELCOME TO OUR WEBSITE!</h1>
                <Link to={"/products"}>
                    <button className="btn btn-primary">Shop Products</button>
                </Link>
            </div>
        </div>
    )
}