import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export class LoginBar extends Component {
    render() {
        return (
            <nav className="nav-list-login-container">
                <ul className="nav-list-login">
                    <li className="nav-list-element"><Link to="/login">Zaloguj się</Link></li>
                    <li className="nav-list-element" autofocus='true'><Link to="/signup">Załóż konto</Link></li>
                </ul>
            </nav>
        );
    }
}