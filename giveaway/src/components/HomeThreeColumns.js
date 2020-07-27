import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export class HomeThreeColumns extends Component {
    render() {
        return <div className="home-article-columns">
            <div className="home-article">
                <h1>10</h1>
                <h2>oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta itaque qui quisquam recusandae saepe,
                    vitae?
                    </p>
            </div>
            <div className="home-article">
                <h1>5</h1>
                <h2>wspartych organizacji</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta itaque qui quisquam recusandae saepe,
                    vitae?</p>
            </div>
            <div className="home-article">
                <h1>7</h1>
                <h2>zorganizowanych zbiórek</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta itaque qui quisquam recusandae saepe,
                    vitae?</p>
            </div>

        </div>

    }
}