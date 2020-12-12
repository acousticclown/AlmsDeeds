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
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> John Doe </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: Rs 3000   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Category</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> John Doe </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: Rs 3000   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Category</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> John Doe </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: Rs 3000   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Category</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> John Doe </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: Rs 3000   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Category</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> John Doe </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: Rs 3000   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Category</span>
          </div>
          <div className="swiper-slide  rounded swiper-shadow">
            <span className="swiper-text pt-md-0 pt-sm-50 d-block"> John Doe </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">    Donated: Rs 3000   </span>
            <span className="swiper-text pt-md-1 pt-sm-50 d-block ">For : Category</span>
          </div>

        </Swiper>
      </CardBody>
    </Card>
  )
}
export default CenteredSliderStyle1
