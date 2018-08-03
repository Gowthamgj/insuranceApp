import React, { Component } from 'react';
import "./help.css";

import { Button } from '@material-ui/core';
class Help extends React.Component{
    render(){

        return(
            <div class="helpimg">
              <h1 id="helpcontent" class="hhead">How We Can Help</h1>  
              <p id="helpcontent" class="hcontent">
                We offer a wealth of other insurance products including Home Insurance,
                Travel Insurance, Pet Insurance and Van Insurance. This means that we can
                offer all your insurance needs in one place and with our existing customer 
                discounts we could save you time and money.
                </p>
                <p id="helpcontent" class="hcontent">As we were voted Best Insurance Provider by consumers four years running 
                    you know that you are in good hands with us. Every 12 seconds a new 
                    customer joins our insurance Group, get a quote today and see how much
                     you could save.
                </p>
                <Button variant="outlined" id="helpcontent">Read More</Button>
            </div>
        );
    }}
    export default Help;
