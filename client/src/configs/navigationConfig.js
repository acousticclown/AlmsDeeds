import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  // {
  //   id: "home",
  //   title: "Home",
  //   type: "item",
  //   icon: <Icon.Home size={20} />,
  //   badge: "warning",
  //   badgeText: "2",
  //   children: [
  //     {
  //       id: "analyticsDash",
  //       title: "Analytics",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       // permissions: ["admin", "editor"],
  //       navLink: "/",
  //     },
  //     {
  //       id: "eCommerceDash",
  //       title: "eCommerce",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin"],
  //       navLink: "/ecommerce-dashboard",
  //     },
  //   ],
  // },
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    navLink: "/",
  },
  {
    id: "donate",
    title: "Donate",
    type: "item",
    icon: <Icon.DollarSign size={20} />,
    permissions: ["admin"],
    navLink: "/support",
  },
  {
    id: "aid",
    title: "Ask for Aid",
    type: "item",
    icon: <Icon.Plus size={20} />,
    permissions: ["admin"],
    navLink: "/aid",
  }
];

export default navigationConfig;
