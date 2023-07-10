import React, {useState} from 'react';
import Modal from './Modal';
import PrimaryBtn from './PrimaryBtn';
import '../styles/event-card.css';

const EventCard = ({ event }) => {
  const { title, date, location, image, description } = event;

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleCloseButton = (
    <PrimaryBtn />
    // <button className='cyber-button-small' onClick={closeModal}>
    //   Close
    // </button>
  );

  const mainModal = (
    <Modal closeModal={closeModal} handleCloseButton={handleCloseButton}>
      <h2 className="modal-title">{title}</h2>
      <p className='modal-details'>{description}</p>
    </Modal>
  );

  return (
    <div className="cyber-tile fg-white bg-yellow mt-4 inline-block vt-bot">
      <div className="imgBx">
        <img src={image}/>
      </div>
      <div className="content">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="cyber-button-small bg-dark fg-white" onClick={() => setShowModal(true)}>Learn More...<span className='tag'>ACM</span></button>
        </div>
      </div>
      {showModal && mainModal}
    </div>
  );
};

export default EventCard;





// import React from "react";

// function EventCard({ele}) {
//   return (
//     <a
//       href={ele.eventUrl}
//       alt={ele.altName}
//     >
//       <div className="card">
//         <div className="wrapper">
//           <img
//             src={ele.coverImageurl}
//             className="cover-image"
//           />
//         </div>
//         <img
//           src={ele.titleImageurl}
//           className="title"
//         />
//         <img
//           src={ele.characterImageurl}
//           className="character"
//         />
//       </div>
//     </a>
//   );
// }

// export default EventCard;
