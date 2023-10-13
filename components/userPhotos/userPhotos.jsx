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
      photos: window.models.photoOfUserModel(this.props.match.params.userId),
    };
  }

  render() {
    console.log(this.state.photos);
    return (
      <div>
        {this.state.photos.map((photo, index) => (
          <div key={index}>
            <img src={`images/${photo.file_name}`} />
            

          </div>
        ))}
          
     
      </div>

    );
  }
}

export default UserPhotos;
