import React, { useState } from "react";
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
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";
import { useDispatch } from "react-redux";
import { saveUsers } from "fetures/userSlice";

const ModalAdd = (props) => {
  const { show, onClose } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(saveUsers({ name, phone, email })).unwrap();
      if (result) {
        console.log("succes add");
        setName("");
        setPhone("");
        setEmail("");
      }
    } catch (err) {
      // handle error here
      console.log("something worng");
    }
  };
  return (
    <CModal scrollable visible={show} onClose={onClose}>
      <CModalHeader className="border-0">
        <CModalTitle>Add User</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm onSubmit={handleSubmit}>
          <CFormInput
            className="mb-2"
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CFormInput
            className="mb-2"
            type="tel"
            label="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <CFormInput
            className="mb-2"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CModalFooter className="border-0">
            <CButton type="submit" color="info">
              <CIcon icon={cilPlus} /> Add
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default ModalAdd;
