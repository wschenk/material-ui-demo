import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog';

class Login extends Component {
  render() {
    return (
      <Dialog 
        open 
        onRequestClose={this.props.toggleLogin}
        fullScreen={this.props.fullScreen}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send
            updates occationally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.toggleLogin} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.toggleLogin} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withMobileDialog()(Login);
