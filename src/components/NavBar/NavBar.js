import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Puppy Clicks</a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <span className=" center">
                        {/* guessedCorrectlyLogic ? you guessed correctly green : you guessed incorrectly red */}
                        {props.children}
                    </span>
                </ul>
                <span className="navbar-text">
                    Score:{props.currentScore}
                </span>

                <span className="navbar-text">
                    Best Score:{props.bestScore}
                </span>

            </div>
        </nav>
    </div>
);

export default NavBar;



