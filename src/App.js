import React from "react";
import { Content, Dashboard, News, UserManagement } from "components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Content>
          <Routes>
            <Route path="/">
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users">
                <Route index element={<UserManagement />} />
                <Route path="detail/:userId" element={<h1>Detail User</h1>} />
              </Route>
              <Route path="news">
                <Route index element={<News />} />
                <Route path="news/:userId" element={<h1>Detail News</h1>} />
              </Route>
              <Route path="login" element={<h1>login</h1>} />
              <Route path="*" element={<h1>404NF</h1>} />
            </Route>
          </Routes>
        </Content>
      </Router>
    </>
  );
}

export default App;
