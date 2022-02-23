import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/card2.png";
import Image2 from "../images/card7.png";
import Image3 from "../images/card9.png";
import Image4 from "../images/card11.png";
function Home() {
    return (
        <div>
            <h1 className="text-center">Bienvenue dans mon Blogue <Link to="/about">About</Link></h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={Image1} />
                </div>
                <div className="col-md-4">
                    <img src={Image2} />
                </div>
                <div className="col-md-4">
                    <img src={Image3} />
                </div>
                <div className="col-md-4">
                    <img src={Image4} />
                </div>
            </div>
        </div>
    );
}
export default Home;