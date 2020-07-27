import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeFourSteps} from "./HomeFourSteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp";
import {Contact} from "./Contact";

export class Home extends Component {
    render() {
        return <div>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <Contact/>
        </div>
    }
}