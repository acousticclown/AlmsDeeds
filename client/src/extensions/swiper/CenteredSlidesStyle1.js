import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import { Play, DollarSign, HelpCircle, FileText, Archive } from "react-feather"
const CenteredSliderStyle1 = () => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    containerClass: "swiper-container centered-style-1",
    slideToClickedSlide: true,
    shouldSwiperUpdate:true
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Current Donations</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper {...params}>
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
export default CenteredSliderStyle1
