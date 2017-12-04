import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import Drawer from './drawer'
import Navbar from './navbar'
import Login from './login'
import Feed from './feed_basic'
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

const defaultTheme = createMuiTheme();

const purpleTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

const fontTheme = createMuiTheme({
  palette: {
    secondary: purple,
    primary: green,
  },
  typography: {
    fontFamily: ['Courier', 'Helvetica'],
  }
})


const themes = [defaultTheme, purpleTheme, fontTheme]

const drawerWidth = 216;

const styles = theme => ({
  narrowContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })
  }
})

class App extends Component {
  state = {drawer: false, login: false, theme: defaultTheme}
  
  toggleDrawer = () => {this.setState( {...this.state, drawer: !this.state.drawer } ) }
  toggleLogin = () => {this.setState( {...this.state, login: !this.state.login } ) }

  setTheme = (idx) => {this.setState( {...this.state, theme: themes[idx] } ) }
  
  render() {
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme={this.state.theme}>
        { this.state.login && <Login toggleLogin={this.toggleLogin}/> }
        <Drawer open={this.state.drawer} toggleDrawer={this.toggleDrawer}/>
        <div className={this.state.drawer ? classes.narrowContainer : null}>
          <Navbar open={this.state.drawer} toggleDrawer={this.toggleDrawer} login={this.toggleLogin}/>
          <Feed setTheme={this.setTheme}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
