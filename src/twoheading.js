import Headingelement from "./headingelement";
import React, { Component } from 'react';
import "./twoheading.css"
class Twoheading extends React.Component{
    render() {
        return (
            <div class="twoflex">
                <Headingelement/>
                <Headingelement/>
            </div>
        );
    }
}
export default Twoheading;