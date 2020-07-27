import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export class HomeFourSteps extends Component {
    render() {
        return <div className="home-steps-columns">
            <div className="home-article-steps">
                <img src={require('../assets/Icon-1.svg')}/>
                <h1>Wybierz rzeczy</h1>
                <h2>Ubrania, zabawki, sprzęt i inne</h2>
            </div>
            <div className="home-article-steps">
                <img src={require('../assets/Icon-2.svg')}/>
                <h1>Spakuj je</h1>
                <h2>Skorzystaj z worków na śmieci</h2>
            </div>
            <div className="home-article-steps">
                <img src={require('../assets/Icon-3.svg')}/>
                <h1>Zdecyduj, komu chcesz pomóc</h1>
                <h2>Wybierz zaufane miejsce</h2>
            </div>
            <div className="home-article-steps">
                <img src={require('../assets/Icon-4.svg')}/>
                <h1>Zamów kuriera</h1>
                <h2>Kurier przyjedzie w dogodnym terminie</h2>
            </div>
        </div>

    }
}