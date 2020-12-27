import React from "react"
import {connect} from "react-redux"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
const CenteredSliderStyle1 = (props) => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    containerClass: "swiper-container centered-style-1",
    slideToClickedSlide: true,
    shouldSwiperUpdate:true
  }

  const {donations}= props;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Current Donations</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper {...params}>
          {
            donations.length>0 && donations.map(donation => (
              <div className="swiper-slide  rounded swiper-shadow">
                <span className="swiper-text pt-md-0 pt-sm-50 d-block"> {donation.name} </span>
                <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: {donation.amount} Ethers   </span>
                <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : {donation.purpose}</span>
              </div>
            ))
          }
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> Shivansh Pratap </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: 1 Ethers   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Medicinal Aid</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> Nishi Patodi </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: 1 Ethers </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Medicinal Aid</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> Aman Khubani </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: 0.5 Ethers </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Medicinal Aid</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> Sandeep Singh Gour </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: 2 Ethers   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Medicinal Aid</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> Aman Khubani</span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: 3 Ethers   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Medicinal Aid</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> Anvi Jain </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: 0.5 Ethers  </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Medicinal Aid</span>
          </div>

        </Swiper>
      </CardBody>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  donations: state.donations.recentDonations.data
})
export default connect(mapStateToProps)(CenteredSliderStyle1)
