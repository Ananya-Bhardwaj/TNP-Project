import React from 'react'
import { useState } from 'react'
import Modal from '../../Components/Modal/Modal';
import './styles.css'; 

const TNPDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); 

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible); 
  }

  return (
    <>
        <div className='tnp-dash'>
            <button>Add company data</button>
            <button 
            onClick={toggleModalVisibility}
            >
              Download statistics</button>
        <iframe src="https://calendar.google.com/calendar/embed?src=ananya181btcse21%40igdtuw.ac.in&ctz=UTC" style={{"border": 0}} width="800" height="600"></iframe>
          <Modal 
          isVisible={isModalVisible}
          closeModal={() => setIsModalVisible(false)}
          modalContent="Content inside modal"  
          />
        </div>
    </>
  )
}

export default TNPDashboard