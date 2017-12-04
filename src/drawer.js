import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';

class MyDrawer extends Component {
  render() {
    return (
      <Drawer
        open={this.props.open} 
        onRequestClose={this.props.toggleDrawer} 
        type="persistent"
        >
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer}
          onKeyDown={this.toggleDrawer}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider/>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Something Else" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    )
  }
}

export default MyDrawer;
