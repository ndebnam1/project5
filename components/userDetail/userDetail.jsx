import React from 'react';
import {
  Divider,
  Typography,
  Button,
  Link
} from '@mui/material';
import './userDetail.css';


/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Typography variant="body1" component="body1">
        <div className='userDetailContainer'>
          <h1>User Details</h1>
          <Divider className="line"/>
          <span>First Name: {window.models.userModel(this.props.match.params.userId).first_name}</span>
          <span>Last Name: {window.models.userModel(this.props.match.params.userId).last_name}</span>
          <span>ID: {window.models.userModel(this.props.match.params.userId)._id}</span>
          <span>Location: {window.models.userModel(this.props.match.params.userId).location}</span>
          <span>Occupation: {window.models.userModel(this.props.match.params.userId).occupation}</span>
        {/* <Button className="myBtn" variant="contained" component={Link} href={`#/photos/${window.models.userModel(this.props.match.params.userId)._id}`}>User Photos</Button> */}
       <Link className="myLink" underline="hover" href={`#/photos/${window.models.userModel(this.props.match.params.userId)._id}`}>{window.models.userModel(this.props.match.params.userId).first_name}'s Photos</Link>

        
        
      </div>
        
        
      </Typography>
    );
  }
}

export default UserDetail;
