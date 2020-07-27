import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export class HomeHeader extends Component {
    render() {
        return <div className="home-header-container">
            <div className="home-header-img-container">
                <img src={require("../assets/Home-Hero-Image.jpg")} alt="a box full of things"/>
            </div>
            <div className="home-header-action">
                <h1 className="home-header-title">Zacznij pomagać!</h1>
                <h1 className="home-header-title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={require('../assets/Decoration.svg')}/>
                <div className='home-header-btn-container'>
                    <button className="home-header-btn"><Link to="/login">zorganizuj zbiórkę</Link></button>
                    <button className="home-header-btn"><Link to="/login">oddaj rzeczy</Link></button>
                </div>
            </div>
        </div>

    }
}