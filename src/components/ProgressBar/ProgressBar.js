import React from 'react';
import Typography from '@mui/material/Typography';
import './ProgressBar.scss';

const ProgressBar = ({ progress }) => {
  //Styling for Progress Bar
  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#01B797',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div className="progress-bar-container">
      {/* Label for Progress Bar */}
      <h2 className="progress-bar-label">Lodgify Grouped Tasks</h2>
      <div className="progress-bar">
        <div style={fillerStyles}>
          <Typography
            sx={{
              paddingRight: '10px',
              paddingLeft: '10px',
              color: 'white',
            }}
          >{`${progress}%`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
