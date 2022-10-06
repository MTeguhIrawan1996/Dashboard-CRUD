import React from "react";
import CIcon from "@coreui/icons-react";
import { cilPowerStandby } from "@coreui/icons";
import { CContainer, CHeader, CHeaderNav, CHeaderToggler } from "@coreui/react";
import { useDispatch } from "react-redux";
import { hideShow } from "fetures/sidebarSlice";
import Breadcrumb from "./breadcrumb";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler onClick={() => dispatch(hideShow())}>
          <span className="header-toggler-icon"></span>
        </CHeaderToggler>
        <CHeaderNav className="">
          <Breadcrumb />
        </CHeaderNav>
        <button className="btn btn-logout ms-auto">
          <CIcon className="nav-icon" icon={cilPowerStandby} />
          Log Out
        </button>
      </CContainer>
    </CHeader>
  );
};

export default Header;
