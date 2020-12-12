import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import Slider from "rc-slider";
import Radio from "../@vuexy/radio/RadioVuexy";
import "rc-slider/assets/index.css";

import "../../assets/scss/plugins/extensions/slider.scss";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class ShopSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h6 className="filter-heading d-none d-lg-block">Filters</h6>
        <Card>
          <CardBody className="p-2">
            <div className="multi-range-price">
              <div className="multi-range-title pb-75">
                <h6 className="filter-title mb-0">Amount</h6>
              </div>
              <ul className="list-unstyled price-range">
                <li>
                  <Radio
                    label="All"
                    defaultChecked={true}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="<= $10"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="$10 - $100"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="$100 - $500"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label=">= $500"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
              </ul>
            </div>
            <hr />
            <div className="product-categories">
              <div className="product-category-title">
                <h6 className="filter-title mb-1">Categories</h6>
              </div>
              <ul className="list-unstyled categories-list">
                {/*
                 * list.map comes here!
                 */}

                <li>
                  <Radio
                    label="Appliances"
                    defaultChecked={true}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Cameras & Camcorders"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Car Electronics & GPS"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Cell Phones"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
              </ul>
            </div>
            <hr />
            <div className="clear-filters">
              <Button.Ripple block className="btn-block" color="primary">
                CLEAR ALL FILTERS
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ShopSidebar;
