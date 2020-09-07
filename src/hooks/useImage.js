import { useState } from 'react';

function useImage() {
  const [image, setImage] = useState([]);

  return { image, setImage };
}

export default useImage;
