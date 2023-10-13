import React from 'react';
import {
  Typography,Link,Button
} from '@mui/material';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: window.models.photoOfUserModel(this.props.match.params.userId),
      id: this.props.match.params.userId,
    };
  }

  render() {

    return (
      <div className ="photos">
      <div className = "container">
       {this.state.photos.map((photo, index) => (
          <div className="box" key={index}>
            <img src={`images/${photo.file_name}`} />
            

         </div>
         
        ))}
          
      
        </div>
        <Button Component={Link} href={`#/users/${this.state.id}`}>Back to user Details</Button>
      </div>
    );
  }
}

export default UserPhotos;
