"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const inputRef = useRef();
  const [imagePicked, setImagePicked] = useState();

  const handlePickClick = () => {
    inputRef.current.click();
    console.log(inputRef.current)
  };

  const handleImagePicked = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImagePicked(null);
      return;
    }

    // converting into dataURL
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePicked(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imagePicked && <p>No image picked yet</p>}
          {imagePicked && <Image src={imagePicked} fill alt="dummy" />}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          required
          name={name}
          ref={inputRef}
          onChange={handleImagePicked}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
