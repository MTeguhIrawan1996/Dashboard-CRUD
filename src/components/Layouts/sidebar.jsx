import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CNavItem,
  CNavGroup,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import navigation from "_nav";
import { AppSidebarNav } from "./appSidebarNav";
import { unfoldableHideShow } from "fetures/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarShow, unfoldable } = useSelector((state) => state.sidebar);

  return (
    <CSidebar position="fixed" unfoldable={unfoldable} visible={sidebarShow}>
      <CSidebarBrand className="d-flex flex-column align-items-start py-4 px-3 gap-2">
        {/* <img src={ILogo} alt="" style={{ maxHeight: 60 }} /> */}
        <div className="title">
          <h1>Yosep Duna</h1>
          <span>Author</span>
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <AppSidebarNav items={navigation} />
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(unfoldableHideShow())}
      />
    </CSidebar>
  );
};

export default Sidebar;
