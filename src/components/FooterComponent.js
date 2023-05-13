import React from "react";
import { Col, Menu, Row, Space } from "antd";
import {
  FacebookFilled,
  GithubOutlined,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";

function FooterComponent() {
//   const items = footernavlinks.map((link) => ({
//     key: link.id,
//     label: `${link.name}`,
//     link: link.navlink,
//   }));

  return (
    <div>
      <Row style={{ display: "block" }}>
        <Col
          span={24}
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          className="logo-col"
        >
          {/* <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          > */}
            {/* <img src={logo.src} alt="Logo" /> */}
            {/* <span>PERFECTUS</span> */}
          {/* </h3> */}
          <div style={{ color: "rgb(0 0 0 / 45%)",width:"100%", marginLeft: "10px",textAlign:"center" }}>
            © Copyright 2023. All Rights Reserved.
          </div>
        </Col>
        <Col md={24} xxl={24} className="footer-links-credits">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            className="footer-menu-container"
          >
            {/* <Menu
              items={items}
              style={{
                display: "flex",
                color: "#000",
                width: "500px",
                fontSize: "13px",
                background: "none",
                margin: "10px 0",
                border: "none",
              }}
              className="footer-menu-links"
            /> */}
            {/* <div
              style={{
                display: "flex",
                margin: "10px 0 10px 20px",
              }}
            >
              <Space size={15}>
                <a href={"#"}>
                  <TwitterOutlined style={{ color: "#000000" }} />
                </a>
                <a href={"#"}>
                  <GithubOutlined style={{ color: "#000000" }} />
                </a>
                <a href={"#"}>
                  <aedinFilled style={{ color: "#000000" }} />
                </a>
                <a href={"#"}>
                  <FacebookFilled style={{ color: "#000000" }} />
                </a>
                <a href={"#"}>
                  <InstagramOutlined style={{ color: "#000000" }} />
                </a>
              </Space>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FooterComponent;