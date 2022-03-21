import React from 'react';

import './Loading-spinner.scss';

function LoadingSpinnerScreen(props:any) {
  return (
    <div className={"loader-container " + (props.class)}></div>
  );
}

export default LoadingSpinnerScreen;
