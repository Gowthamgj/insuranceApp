import React, { Component } from 'react';
import "./slideimg.css";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class Slideimg extends React.Component{
    render(){

        return (
            <div className="Slideimg">
                <div id="parallax">
                    <div class="flex-container">
                        <h1 id="cc" class="slidecontent">
                        Protect Your Family With Insurance.
                        </h1>
                        <h3 id="cc" class="slidepara">
                            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </h3>
                        <div id="cc">
                        <Button variant="contained" class="roundedbutton">Find Out More</Button>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}
export default Slideimg;