import React from "react";
import {connect} from "react-redux";
import { Card, CardBody } from "reactstrap";
class TableContent extends React.Component {
  render() {
    const {donators} = this.props;
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
          {donators.length>0 && donators.map(donator => (
            <div className="supporter-details mt-2">
              <div className="supporter-info d-inline-block">
                <div className="font-weight-bold">{donator.name}</div>
    
              </div>
            </div>
          ))}
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

const mapStateToProps = (state) => ({
  donators: state.donations.donators.data
})

export default connect(mapStateToProps)(TableContent);
