import React from "react";
import { CCol, CProgress, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilUserFemale,
  cilUser,
  cilCheckCircle,
  cilXCircle,
} from "@coreui/icons";
import { CChartLine } from "@coreui/react-chartjs";

const Analytic = () => {
  const progressGroupExample1 = [
    { title: "Belum diproses", icon: cilXCircle, value: 53, color: "info" },
    {
      title: "Sudah diproses",
      icon: cilCheckCircle,
      value: 43,
      color: "danger",
    },
  ];
  const progressGroupExample2 = [
    { title: "Male", icon: cilUser, value: 53 },
    { title: "Female", icon: cilUserFemale, value: 43 },
  ];
  return (
    <>
      <div className="title">
        <h1>Data & Analytics</h1>
        <span className="sub-title">Show updates a post</span>
      </div>
      <div className="analytic-content card card-body mt-3">
        <CRow>
          <CCol xs={12} md={6} xl={6}>
            <CRow>
              <CCol sm={6}>
                <div className="d-flex justify-content-between align-items-center border-start border-start-4 border-start-info rounded-2 py-1 px-3 mb-3">
                  <div className="wrp">
                    <div className="text-medium-emphasis small">
                      Belum diproses
                    </div>
                    <div className="fs-9 fw-semibold">22,643</div>
                  </div>
                  <CChartLine
                    className="py-2"
                    style={{ height: "40px", width: "100px" }}
                    data={{
                      labels: [
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S",
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S",
                        "S",
                        "M",
                      ],
                      datasets: [
                        {
                          backgroundColor: "transparent",
                          borderColor: "#3399ff",
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </CCol>
              <CCol sm={6}>
                <div className="d-flex justify-content-between align-items-center border-start border-start-4 border-start-danger rounded-2 py-1 px-3 mb-3">
                  <div className="wrp">
                    <div className="text-medium-emphasis small">
                      Sudah diproses
                    </div>
                    <div className="fs-9 fw-semibold">22,643</div>
                  </div>
                  <CChartLine
                    className="py-2"
                    style={{ height: "30px", width: "100px" }}
                    data={{
                      labels: [
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S",
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S",
                        "S",
                        "M",
                      ],
                      datasets: [
                        {
                          backgroundColor: "transparent",
                          borderColor: "#f9b115",
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </CCol>
            </CRow>
            <hr className="mt-0" />
            {progressGroupExample1.map((item, index) => (
              <div className="progress-group mb-4" key={index}>
                <div className="progress-group-header">
                  <CIcon className="me-2" icon={item.icon} size="lg" />
                  <span>{item.title}</span>
                  <span className="ms-auto fw-semibold">{item.value}%</span>
                </div>
                <div className="progress-group-bars">
                  <CProgress thin color={item.color} value={item.value} />
                </div>
              </div>
            ))}
          </CCol>
          <CCol xs={12} md={6} xl={6}>
            <CRow>
              <CCol sm={6}>
                <div className="d-flex justify-content-between align-items-center border-start border-start-4 border-start-warning rounded-2 py-1 px-3 mb-3">
                  <div className="wrp">
                    <div className="text-medium-emphasis small">Pageviews</div>
                    <div className="fs-9 fw-semibold">22,643</div>
                  </div>
                  <CChartLine
                    className="py-2"
                    style={{ height: "40px", width: "100px" }}
                    data={{
                      labels: [
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S",
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S",
                        "S",
                        "M",
                      ],
                      datasets: [
                        {
                          backgroundColor: "transparent",
                          borderColor: "#3399ff",
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      elements: {
                        line: {
                          tension: 0.4,
                        },
                        point: {
                          radius: 0,
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </CCol>
            </CRow>
            <hr className="mt-0" />
            {progressGroupExample2.map((item, index) => (
              <div className="progress-group mb-4" key={index}>
                <div className="progress-group-header">
                  <CIcon className="me-2" icon={item.icon} size="lg" />
                  <span>{item.title}</span>
                  <span className="ms-auto fw-semibold">{item.value}%</span>
                </div>
                <div className="progress-group-bars">
                  <CProgress thin color="warning" value={item.value} />
                </div>
              </div>
            ))}
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default Analytic;
