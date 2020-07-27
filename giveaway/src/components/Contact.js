import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export class Contact extends Component {
    render() {
        return <div>
            <h1>Contact us at contact@example.com</h1>
            <Link to="/">Home</Link>
        </div>
    }
}