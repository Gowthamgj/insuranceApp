import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './headnav.css';
// import logo from './logo.svg';
class Headnav extends React.Component{
    state = {
        anchorEl: null,
        anchorE2: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
      handleClick2 = event => {
        this.setState({ anchorE2: event.currentTarget });
      };
      handleClose = () => {
        this.setState({ anchorEl: null  });
      };
      handleClose2 = () => {
        this.setState({  anchorE2: null });
      };
    render(){
        const { anchorEl } = this.state;
        const { anchorE2 } = this.state;        
        return(
        <div className="headnav" id="headercompo">
            <div>
                <img 
                src="https://wp4.tallythemesdemo.com/insurance-now-free/wp-content/uploads/sites/6/2017/09/logo2.png"
                id="companylogo"
                alt="ss"/>
            </div>
            <div id="navitems">
                <div id="homecompo"><Button>Home</Button></div>
                <div id="aboutcompo"><Button>About</Button></div>
                <div>
                    <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}>
                    Tamplates
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    >
                    <MenuItem onClick={this.handleClose}>Right sidebar</MenuItem>
                    <MenuItem onClick={this.handleClose}>Left sidebar</MenuItem>
                    <MenuItem onClick={this.handleClose}>No Sidebar</MenuItem>
                    </Menu>
                </div>
                {/* <span>
                    <Button
                    aria-owns={anchorE2 ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick2}>
                    Blog
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorE2={anchorE2}
                    open={Boolean(anchorE2)}
                    onClose={this.handleClose2}
                    >
                    <MenuItem onClick={this.handleClose2}>Category</MenuItem>
                    <MenuItem onClick={this.handleClose2}>Single post</MenuItem>
                    </Menu>
                </span> */}
                <div><Button>contact</Button></div>
            </div>
            <div id="iconsofheader">
                <Button><i className="fab fa-facebook-f"></i></Button>
                <Button><i className="fab fa-twitter"></i></Button>
                <Button><i className="fab fa-linkedin-in"></i></Button>
            </div>
        </div>
        );
    }
}
export default Headnav;
