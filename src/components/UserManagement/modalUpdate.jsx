import React, { useEffect, useState } from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors, updateUsers } from "fetures/userSlice";
import { useNavigate } from "react-router-dom";

const ModalUpdate = (props) => {
  const { show, onClose, userId } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const user = useSelector((state) => userSelectors.selectById(state, userId));

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhone(user.phone);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(
        updateUsers({ id: userId, name, phone, email })
      ).unwrap();
      if (result) {
        console.log("succes Update");
      }
      navigate(0);
    } catch (err) {
      // handle error here
      console.log("something worngggg");
    }
  };

  return (
    <CModal scrollable visible={show} onClose={onClose}>
      <CModalHeader className="border-0">
        <CModalTitle>Edit Data</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={handleUpdate}>
          <CFormInput
            className="mb-2"
            type="text"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <CFormInput
            className="mb-2"
            type="tel"
            label="Phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <CFormInput
            className="mb-2"
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CModalFooter className="border-0">
            <CButton color="outline-dark" onClick={onClose}>
              Cancle
            </CButton>
            <CButton type="submit" color="info">
              Edit
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default ModalUpdate;
