import React from 'react';
import ImageUploading from 'react-images-uploading';
import styles from './home.module.css';
import useImage from '../../hooks/useImage';

function Home() {
  const { image, setImage } = useImage();
  const maxNumber = 1;

  const reRoute = () => {};

  const onChange = (imageList) => {
    setImage(imageList);
  };

  return (
    <div className={styles.container}>
      <h1>Cover Maker</h1>
      <ImageUploading
        value={image}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className={styles.uploadContainer}>
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  className={styles.uploadedImage}
                  src={image['data_url']}
                  alt="uploaded"
                />
                <div>
                  <button
                    className={styles.smallButton}
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className={styles.smallButton}
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <form>
        <label for="text">Text to show:</label>
        <input id="text" type="text"></input>
        <label for="color_1">Color 1:</label>
        <input id="color_1" type="text"></input>
        <label for="color_2">Color 2:</label>
        <input id="color_2" type="text"></input>
        <button>Generate Cover</button>
      </form>
    </div>
  );
}

export default Home;
