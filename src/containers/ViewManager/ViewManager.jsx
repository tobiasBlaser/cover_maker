import React, { useState } from 'react';
import Home from '../Home/Home';
import CoverView from '../CoverView/CoverView';

function ViewManager() {
  const [pageToggle, setPageToggle] = useState(true);
  const [data, setData] = useState();

  return (
    <>
      {pageToggle ? (
        <Home togglePage={setPageToggle} setData={setData} />
      ) : (
        <CoverView togglePage={setPageToggle} data={data}></CoverView>
      )}
    </>
  );
}

export default ViewManager;
