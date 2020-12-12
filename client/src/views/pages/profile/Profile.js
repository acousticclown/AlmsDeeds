import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ProfileHeader from "./ProfileHeader"
import AboutCard from "./AboutCard"
import SuggestedPages from "./SuggestedPages"
import TwitterFeed from "./TwitterFeeds"
import Posts from "./Posts"
import LatestPhotos from "./LatestPhotos"
import Suggestions from "./Suggestions"
import Polls from "./Polls"

import "../../../assets/scss/pages/users-profile.scss"

class Profile extends React.Component {
  state = {
    isLoading: false
  }

  toggleLoading = () => {
    this.setState({
      isLoading: true
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  render() {
    return (
      <React.Fragment>
        {/* <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        /> */}
        <h1>Profile</h1>
        <div id="user-profile">
          <Row>
            <Col sm="12">
              <ProfileHeader />
            </Col>
          </Row>
          <div id="profile-info" class="w-100 rounded pt-md-3 pt-sm-50 ">
            <Col>
            <Card>
        <CardBody className="p-md-3 ">
              <Row>
              <h4 className="mb-0 pt-md-1 pt-sm-50 pl-2">Acc. Id:<span className="text-success pl-2">udhbkw54brv43bgrvwkjw</span> </h4> 
              </Row>
              <Row>
              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Name:<strong className="pl-2">John Doe</strong> </h5> 
              </Row>
              <Row>
              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Email:<strong className="pl-2">john@gmail.com</strong> </h5>  
              </Row>
              <Row>
              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Donations:<strong className="pl-2">5</strong> </h5> 
              </Row>
              <Row>
              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Transactions:<strong className="pl-2">8</strong> </h5> 
              </Row>
              </CardBody>
              </Card>
            </Col>
          </div>
          {/* <div id="profile-info">
            <Row>
              <Col lg="3" md="12">
                <AboutCard />
                <SuggestedPages />
                <TwitterFeed />
              </Col>
              <Col lg="6" md="12">
                <Posts />
              </Col>
              <Col lg="3" md="12">
                <LatestPhotos />
                <Suggestions />
                <Polls />
              </Col>
            </Row>
            <Row>
              <Col sm="12" className="text-center">
                <Button.Ripple
                  color="primary"
                  onClick={this.toggleLoading}
                  className={`${
                    this.state.isLoading ? "btn-loading" : ""
                  } btn-load`}
                >
                  <Spinner color="primary" />
                  Load More
                </Button.Ripple>
              </Col>
            </Row>
          </div> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Profile
