import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import styles from './home.module.css';

function Home({ togglePage, setData }) {
  const [image, setImage] = useState();
  const [imageText, setImageText] = useState('');
  // const [color1, setColor1] = useState('');
  // const [color2, setColor2] = useState('');
  const maxNumber = 1;

  const onChange = (imageList) => {
    setImage(imageList);
  };

  return (
    <div className="container">
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
              Upload image
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
                    className="smallButton"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="smallButton"
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
      <div className="form">
        <label htmlFor="text">Text to show:</label>
        <input
          value={imageText}
          onChange={(v) => setImageText(v.target.value)}
          id="text"
          type="text"
        ></input>
        {/* <label htmlFor="color_1">Color 1:</label>
        <input
          value={color1}
          onChange={(v) => setColor1(v.target.value)}
          id="color_1"
          type="text"
        ></input>
        <label htmlFor="color_2">Color 2:</label>
        <input
          value={color2}
          onChange={(v) => setColor2(v.target.value)}
          id="color_2"
          type="text"
        ></input> */}
        {image && (
          <button
            onClick={() => {
              setData({ image: image[0], imageText });
              togglePage(false);
            }}
          >
            Generate Cover
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
