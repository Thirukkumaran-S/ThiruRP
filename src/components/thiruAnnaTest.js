import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);

    // send the image to the backend
    const formData = new FormData();
    formData.append("image", dataURItoBlob(imageSrc));
    axios.post("http://2227-35-223-215-17.ngrok.io/classify_face", formData)
      .then(response => {
        console.log("Image uploaded successfully");
      })
      .catch(error => {
        console.log("Error uploading image");
      });
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imageSrc && (
        <img src={imageSrc} alt="Captured" />
      )}
    </>
  );
};

export default WebcamCapture;