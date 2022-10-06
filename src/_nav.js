import React from "react";
import CIcon from "@coreui/icons-react";
import { cilHome, cilPencil, cilUser } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "dashboard",
    icon: <CIcon icon={cilHome} height={15} />,
  },
  {
    component: CNavItem,
    name: "User Management",
    to: "users",
    icon: <CIcon icon={cilUser} height={15} />,
  },
  {
    component: CNavGroup,
    name: "News",
    to: "news",
    icon: <CIcon icon={cilPencil} height={15} />,
    items: [
      {
        component: CNavItem,
        name: "News",
        to: "news",
      },
    ],
  },
];

export default _nav;
