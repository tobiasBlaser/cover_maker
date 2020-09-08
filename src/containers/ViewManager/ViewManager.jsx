import React, { useState } from 'react';
import Home from '../Home/Home';
import CoverView from '../CoverView/CoverView';

function ViewManager() {
  const [pageToggle, setPageToggle] = useState(true);

  return (
    <>
      {pageToggle ? (
        <Home togglePage={setPageToggle}></Home>
      ) : (
        <CoverView togglePage={setPageToggle}></CoverView>
      )}
    </>
  );
}

export default ViewManager;
