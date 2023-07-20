import React, { useState } from "react";
import Modal from "./Modal";
import RegisterButton from "./RegisterButton";

const EventCard = ({ eventProp }) => {
  const {_id, name, date, location, thumbnail, description } = eventProp.event;

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleCloseButton = <RegisterButton btnProp={{id:_id, authProp:eventProp.authProp }} />;

  const mainModal = (
    // <div className="modal-wrapper">
    //   <div className="modal-container">
        <Modal closeModal={closeModal} handleCloseButton={handleCloseButton}>
            <h2 className="modal-title">{name}</h2>
            <p className="modal-details">{description}</p>
        </Modal>
    //   </div>
    // </div>
  );

  return (
    <>
      <div className="event-card">
        <div className="imgBx">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="content">
          <h2>{name}</h2>
          {/* <p>{description}</p> */}
          {/* <button className="" onClick={() => setShowModal(true)}>
            Learn More...
          </button> */}
          <button className="explore-button event-card-btn" onClick={() => setShowModal(true)}>LEARN MORE ...</button>
        </div>
        {showModal && mainModal}
      </div>
    </>
  );
};

export default EventCard;
