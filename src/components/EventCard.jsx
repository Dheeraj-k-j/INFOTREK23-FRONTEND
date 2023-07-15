import React, {useState}  from 'react'
import Modal from './Modal';
import PrimaryBtn from './PrimaryBtn';

const EventCard = ({event}) => {
    const { name, date, location, thumbnail, description } = event;

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const handleCloseButton = (
        <PrimaryBtn />
    );

    const mainModal = (
        <Modal closeModal={closeModal} handleCloseButton={handleCloseButton}>
          <h2 className="modal-title">{name}</h2>
          <p className='modal-details'>{description}</p>
        </Modal>
      );

  return (
    <>
    <div className='event-card'>
        <div className='imgBx'>
            <img src={thumbnail} alt={name} />
        </div>
        <div className='content'>
            <h2>{name}</h2>
            {/* <p>{description}</p> */}
            <button className="" onClick={() => setShowModal(true)}>Learn More...</button>
        </div>
        {showModal && mainModal}
        
    </div>
    </>
  )
}

export default EventCard;