import React from "react";
import CIcon from "@coreui/icons-react";
import { cilArrowCircleRight, cilHome, cilUser } from "@coreui/icons";
import Analytic from "./analytic";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <div className="title">
          <h1>Dashboard</h1>
          <span className="sub-title">User Quantity</span>
        </div>
        <button className="btn btn-crm">
          Go to CRM
          <CIcon className="nav-icon" icon={cilArrowCircleRight} />
        </button>
      </div>
      <div className="dashboard-content">
        <div className="container-grid">
          <div className="item column-2 row-3 column-sm-4 row-sm-1">
            <div className="card card-body">
              <div className="icon-card">
                <CIcon icon={cilHome} height={25} />
              </div>
              <div className="desc text-center">
                <h5>9823</h5>
                <span>User</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-3 column-sm-4 row-sm-1">
            <div className="card card-body">
              <div className="icon-card">
                <CIcon icon={cilHome} height={25} />
              </div>
              <div className="desc text-center">
                <h5>243</h5>
                <span>Brrower</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-3 column-sm-4 row-sm-1">
            <div className="card card-body">
              <div className="icon-card">
                <CIcon icon={cilHome} height={25} />
              </div>
              <div className="desc text-center">
                <h5>9823</h5>
                <span>Loan Adviser</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="item column-2 row-1 column-sm-6">
            <div className="sub-card">
              <div className="icon-card">
                <CIcon icon={cilUser} height={15} />
              </div>
              <div className="desc">
                <h5>Admin Office</h5>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Analytic />
    </div>
  );
};

export default Dashboard;
