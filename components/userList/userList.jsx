import React from 'react';
import {
  useState,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Link,
}
  from '@mui/material';
import './userList.css';
import UserDetail from '../userDetail/userDetail';

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: window.models.userListModel(),
    };
  }
    

  
  render() {
    
    return (
      <div>
        <Typography className="top"variant="body1">
          <h2 id="header">Users</h2>
          <Divider className="line"/>
        </Typography>
        <List component="nav">
          {this.state.users.map((user, index) => (
            
            <div key={index}>
              <ListItemButton component={Link} to={`#/users/${user._id}`} >{user.first_name}</ListItemButton>
              <Divider />
          </div>
          ))}

        </List>
        
      </div>
    );
  }
}

export default UserList;
