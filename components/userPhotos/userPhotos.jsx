import React from 'react';
import {
  Typography
} from '@mui/material';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: window.models.photoOfUserModel(),
    };
  }

  render() {
    return (
      <Typography variant="body1">
        {this.state.photos.map((photo, index) => (
          <div key={index}>
            <img src={"/home/nilesd/cs/softwareEngineering/project5/images/kenobi2.jpg"} />

          </div>
        ))}
          
     
      </Typography>

    );
  }
}

export default UserPhotos;
