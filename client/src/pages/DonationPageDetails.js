import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import {
  Star,
  Truck,
  DollarSign,
  ShoppingCart,
  Heart,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Award,
  Clock,
  Shield,
} from "react-feather";
import Sidebar from "../components/custom/DataListSidebar";
import Breacrumbs from "../components/@vuexy/breadCrumbs/BreadCrumb";
import classnames from "classnames";
import SessionByDevice from "../components/custom/SessionByDevice";
import Swiper from "react-id-swiper";
import macbook from "../assets/img/elements/macbook-pro.png";
import headphones from "../assets/img/elements/beats-headphones.png";
import laptop from "../assets/img/elements/macbook-pro.png";
import homepod from "../assets/img/elements/homepod.png";
import earphones from "../assets/img/elements/wireless-earphones.png";
import iphoneX from "../assets/img/elements/iphone-x.png";
import watch from "../assets/img/elements/apple-watch.png";
import mouse from "../assets/img/elements/magic-mouse.png";
import "swiper/css/swiper.css";
import "../assets/scss/pages/app-ecommerce-shop.scss";

import "../assets/scss/plugins/extensions/react-paginate.scss";
import "../assets/scss/pages/data-list.scss";

const swiperParams = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 55,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 55,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
  },
};

let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7";

class DetailPage extends React.Component {
  state = {
    selectedColor: 1,
    sidebar: false,
  };

  handleSidebar = (boolean) => {
    this.setState({ sidebar: boolean });
    // if (addNew === true) this.setState({ currentData: null, addNew: true });
  };

  toggleSelectedColor = (color) => this.setState({ selectedColor: color });
  render() {
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Product Detail"
          breadCrumbParent="eCommerce"
          breadCrumbActive="Product Detail"
        />
        <Card className="overflow-hidden app-ecommerce-details">
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col className="d-flex flex-column mb-2 mb-md-0" sm="12" md="5">
                <h3>Mike Ross</h3>
                <hr />
                <div className="d-flex flex-column">
                  <span className="text-muted">Email: mike.ross@gmail.com</span>
                  <span className="text-muted">Contact: 9131299848</span>
                </div>
                <SessionByDevice
                  primary={$primary}
                  warning={$warning}
                  danger={$danger}
                  primaryLight={$primary_light}
                  warningLight={$warning_light}
                  dangerLight={$danger_light}
                />
              </Col>
              <Col md="7" sm="12">
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">$200</h3>
                </div>
                <hr />
                <p>
                  Simplify your everyday life with the Google Home, a
                  voice-activated speaker powered by the Google Assistant. Use
                  voice commands to enjoy music, get answers from Google and
                  manage everyday tasks. Google Home is compatible with Android
                  and iOS operating systems, and can control compatible smart
                  devices such as Chromecast or Nest.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-50">
                    <Truck size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      Collected: $160
                    </span>
                  </li>
                  <li>
                    <DollarSign size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      Left: $40
                    </span>
                  </li>
                </ul>
                <hr />
                <p className="my-50">
                  <span>Account ID</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">
                    0x1fDa7f9bB9a55F26e33Dd957605A0474883e7DbD
                  </span>
                </p>
                <div className="action-btns">
                  <Button.Ripple
                    onClick={() => this.handleSidebar(true)}
                    className="mr-1 mb-1"
                    color="primary"
                  >
                    <span className="align-middle ml-50">Donate</span>
                  </Button.Ripple>
                </div>
                {/* <div className="d-flex flex-wrap social-media-btns">
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="primary"
                    outline
                  >
                    <Facebook size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="info"
                    outline
                  >
                    <Twitter size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="danger"
                    outline
                  >
                    <Youtube size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    color="primary"
                    outline
                  >
                    <Instagram size={15} />
                  </Button.Ripple>
                </div> */}
              </Col>
            </Row>
          </CardBody>
          {/* <Row>
            <Col sm="12">
              <Row className="item-features py-5 mt-5">
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Award className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      100% Original
                    </p>
                    <p>
                      Chocolate bar candy canes ice cream toffee cookie halvah.
                    </p>
                  </div>
                </Col>
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Clock className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      10 Day Replacement
                    </p>
                    <p>Marshmallow biscuit donut dragée fruitcake wafer.</p>
                  </div>
                </Col>
                <Col className="text-center" md="4" sm="12">
                  <div className="w-50 mx-auto">
                    <Shield className="text-primary mb-1" size={42} />
                    <p className="font-medium-2 text-bold-600 mb-0">
                      1 Year Warranty
                    </p>
                    <p>Cotton candy gingerbread cake I love sugar sweet.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}
          <CardBody>
            {/* <Row>
              <Col className="details-page-swiper text-center mt-5" sm="12">
                <div className="heading-section mb-3">
                  <h2 className="text-uppercase mb-50">Related Products</h2>
                  <p>People also search for this items</p>
                </div>
                <Swiper {...swiperParams}>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Beats by Dr. Dre - Powerbeats2 Wireless Earbud
                        Headphones - Black/Red
                      </p>
                      <small>By Dr. Dre</small>
                    </div>
                    <div className="img-container">
                      <img src={watch} alt="watch" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $129
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Apple - Apple Watch Nike+ 42mm Silver Aluminum Case
                        Silver/Volt Nike Sport Band - Silver Aluminum
                      </p>
                      <small>By Apple</small>
                    </div>
                    <div className="img-container">
                      <img src={earphones} alt="earphones" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $399
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Google - Google Home - White/Slate fabric
                      </p>
                      <small>By Google</small>
                    </div>
                    <div className="img-container">
                      <img src={laptop} alt="laptop" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $1999.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Amazon - Fire TV Stick with Alexa Voice Remote - Black
                      </p>
                      <small>By Amazon</small>
                    </div>
                    <div className="img-container">
                      <img src={homepod} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $39.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Google - Chromecast Ultra - Black
                      </p>
                      <small>By Google</small>
                    </div>
                    <div className="img-container">
                      <img src={iphoneX} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $69.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        Beats by Dr. Dre - Beats EP Headphones - White
                      </p>
                      <small>Beats by Dr. Dre</small>
                    </div>
                    <div className="img-container">
                      <img src={headphones} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $129.99
                    </p>
                  </div>
                  <div>
                    <div className="title mb-1">
                      <p className="font-medium-1 text-bold-600 truncate mb-0">
                        LG - 40" Class (39.5" Diag.) - LED - 1080p - HDTV -
                        Black
                      </p>
                      <small>by LG</small>
                    </div>
                    <div className="img-container">
                      <img src={mouse} alt="homepod" />
                    </div>
                    <div className="ratings  ml-1">
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#ff9f43" stroke="#ff9f43" />
                      <Star size={15} fill="#fff" stroke="#b8c2cc" />
                    </div>
                    <p className="text-bold-500 font-medium-2 text-primary mt-50">
                      $279.99
                    </p>
                  </div>
                </Swiper>
              </Col>
            </Row> */}
          </CardBody>
        </Card>
        <div
          className={`data-list ${
            this.props.thumbView ? "thumb-view" : "list-view"
          }`}
        >
          <Sidebar
            show={this.state.sidebar}
            // data={currentData}
            // updateData={this.props.updateData}
            // addData={this.props.addData}
            handleSidebar={this.handleSidebar}
            // thumbView={this.props.thumbView}
            // getData={this.props.getData}
            dataParams={this.props.parsedFilter}
            // addNew={this.state.addNew}
          />
          <div
            className={classnames("data-list-overlay", {
              show: this.state.sidebar,
            })}
            onClick={() => this.handleSidebar(false)}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default DetailPage;
