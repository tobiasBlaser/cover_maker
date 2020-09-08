import { exportComponentAsJPEG } from 'react-component-export-image';
import React, { forwardRef, useRef } from 'react';
import styles from './coverview.module.css';

function CoverView({ togglePage, data }) {
  const componentRef = useRef();

  const ComponentToPrint = forwardRef((props, ref) => (
    <div className={styles.exportContainer} ref={ref}>
      <div className={styles.imageCover}>
        <h3>{data.imageText}</h3>
      </div>
      <img
        className={styles.uploadedImage}
        src={data.image.data_url}
        alt="with cover"
      />
    </div>
  ));

  return (
    <div className="container">
      <h1>Test</h1>
      <ComponentToPrint ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Download
      </button>
      <button onClick={() => togglePage(true)}>Go to home</button>
    </div>
  );
}

export default CoverView;
