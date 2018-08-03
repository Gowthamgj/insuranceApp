import React, { Component } from 'react';
import "./mappart.css";
class Mappart extends React.Component{
render() {
    return(
        <div>
            <div id="findus">
            <div  >
                <iframe  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=coca%20cola%20london%20eye+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0" >
                <a href="https://www.mapsdirections.info/en/custom-google-maps/">
                Add Google Map to website</a> by 
                <a href="https://www.mapsdirections.info/en/">
                Measure area on map
                </a></iframe>
            </div>
           
            <div >
                <h1>WHERE  to find us</h1>
                <p>We are located in Palo Alto, California. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <span>Our Business 19633 Sandhill Rd. Palo Alto, CA 90423</span>
            </div>
        </div></div>
    );
}
}
export default Mappart;