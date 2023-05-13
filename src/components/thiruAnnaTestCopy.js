import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import Dropzone from "react-dropzone";
import "./ImageUpload.css";
import axios from "axios";
import { Layout, Alert, message, Button } from "antd";
import Navbaar from "./Navbaar";
import FooterComponent from "./FooterComponent";
const { Header, Content, Footer } = Layout;

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [Name, setName] = useState(null);
  const [Age, setAge] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [IfRes, setIfRes] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };
  const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post(`http://cffd-34-91-112-206.ngrok.io/classify_face`, formData)
      .then((response) => {
        console.log("file uploaded successfully:", response.data);
        if (response.data === "") {
          message.error(
            "Not eligible for Voting because the person is not in the registered list"
          );
        }
        setName(response.data);
        axios
          .post(`http://14ca-35-204-147-243.ngrok.io/upload_image`, formData)
          .then((response) => {
            console.log("file uploaded successfully:", response.data);
            if (response.data == "Less than 18") {
              message.error(
                "Not eligible for Voting because the age limit is below 18"
              );
            }
            setAge(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setLoading(false);
      });
    // Add code here to handle file upload to a server
    console.log("file uploaded:", file);
  };

  const checkVoteEligibility = () => {
    console.log("name", Name);
    const formData = new FormData();
    formData.append("nic", Name);
    axios
      .get(`http://cffd-34-91-112-206.ngrok.io/voting`, {nic:Name})
      .then((response) => {
        console.log("file uploaded successfully:", response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setLoading(false);
      });
  };

  const handlerCheckEligible = () => {
    if (Age && Name) {
      if (Age === "Greater than 18") {
        checkVoteEligibility();
      } else {
        console.log("Age is below 18. NOt eligible");
      }
    }
  };

  return (
    <>
      <Layout style={{ background: "none", minHeight: "100vh" }}>
        <Header
          style={{
            position: "sticky",
            zIndex: 2,
            top: 0,
            background: "#6c757d",
          }}
        >
          <Navbaar />
        </Header>
        <Content
          style={{
            background: "none",
            marginTop: "10px",
            marginBottom: "100px",
            overflow: "auto",
          }}
        >
          <div className="image-upload-container">
            <br />
            <br />
            <br />
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="uploaded"
                      className="dropzones"
                    />
                  ) : (
                    <div className="upload-icon">
                      <FiUpload />
                      <span>Drag and drop or click to upload</span>
                    </div>
                  )}
                </div>
              )}
            </Dropzone>

            {file && (
              <Button loading={Loading} onClick={handleSubmit} type="primary">
                Upload
              </Button>
            )}

            {file != null && (
              <Button
                onClick={() => window.location.reload()}
                type="primary"
                style={{ margin: "20px 0" }}
              >
                Next Image
              </Button>
            )}

            {!Loading && Name && Age === "Greater than 18" && (
              <>
                <Alert
                  style={{ margin: "20px 0" }}
                  message="Voter Verified"
                  description={
                    <>
                      <div>
                        <span>Name: {Name}</span>
                        <br />
                        <span>Age: {Age}</span>
                      </div>
                      <br />
                      <div>
                        <div style={{ display: "flex", margin: "0 auto" }}>
                          {Age === "Greater than 18" && (
                            <Button
                              onClick={handlerCheckEligible}
                              type="primary"
                            >
                              Check Eligibility
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  }
                  type="success"
                  showIcon
                />
              </>
            )}
          </div>
        </Content>
        <Footer style={{ background: "#6c757d", zIndex: 1 }}>
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  );
}

export default ImageUpload;
