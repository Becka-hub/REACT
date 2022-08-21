import React, { useState } from 'react';

const App = () => {
  const [selectImage, setSelectImage] = useState([]);
  const handlefile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imageArray = selectedFilesArray.map((file, index) => {
        return { id: selectImage.length + index + 1, image: URL.createObjectURL(file) };
    })
    setSelectImage((previousImage) => previousImage.concat(imageArray));
  }
  console.log(selectImage);


  
  return (
    <div className="App">
      <input type="file" name="images" placeholder='upload file' multiple accept='image/png,image/jpg,image/jpeg' onChange={handlefile} />
      {selectImage && selectImage.map((image, index) => {
        return (
          <div className='image' key={index}>
            <img src={image.image} alt="sary" width="200" height="200" />
            <p>{image.id}</p>
            <i className='fa fa-close' onClick={() => setSelectImage(selectImage.filter((el) => el.image !== image.image))}>Delete</i>
          </div>
        )
      })}
    </div>
  )
}

export default App