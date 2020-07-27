import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export class NaviMenu extends Component {
    render() {
        return (
            <nav className="nav-list-login-container">
                <ul className='nav-list-login'>
                    <li className="nav-list-element"><Link to="/">Start</Link></li>
                    <li className="nav-list-element"><Link to="/contact">O co chodzi?</Link></li>
                    <li className="nav-list-element">Fundacja i organizacje</li>
                    <li className="nav-list-element">Kontakt</li>
                </ul>
            </nav>
        );
    }
}