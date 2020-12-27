import React from "react";
import { Card, CardBody } from "reactstrap";
import img1 from "../../assets/img/portrait/small/avatar-s-1.jpg";
import img2 from "../../assets/img/portrait/small/avatar-s-2.jpg";
import img3 from "../../assets/img/portrait/small/avatar-s-3.jpg";
import img4 from "../../assets/img/portrait/small/avatar-s-4.jpg";
import img5 from "../../assets/img/portrait/small/avatar-s-5.jpg";

class TableContent extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          {/* <h4>Table of Content</h4> */}
          <div className="faq-content mt-1">
            <div className="faq-table-content">
              <span className="bullet bullet-success" />
              Neutral
            </div>
            <div className="faq-table-content">
              <span className="bullet bullet-warning" />
              Moderately Urgent
            </div>
            <div className="faq-table-content">
              <span className="bullet bullet-danger" />
              Critical
            </div>
          </div>
          <h4 className="mt-3">Top Donators</h4>
          <div className="supporter-details mt-2">
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Aman Khubani</div>
  
            </div>
          </div>
          <div className="supporter-details mt-2">
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Sandeep Singh Gour</div>
            
            </div>
          </div>
          <div className="supporter-details mt-2">
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Nishi Patodi</div>
  
            </div>
          </div>
          <div className="supporter-details mt-2">
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Shivansh Pratap</div>
  
            </div>
          </div>
          <div className="supporter-details mt-2">
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Anvi Jain</div>
            
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}
export default TableContent;
