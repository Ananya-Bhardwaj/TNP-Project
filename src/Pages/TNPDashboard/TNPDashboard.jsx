import React from 'react'
import { useState } from 'react'
import Modal from '../../Components/Modal/Modal';
import './styles.css'; 
import Button from '../../Components/Button/Button';

const TNPDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); 

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible); 
  }

  return (
    <>
        <div className='tnp-dash'>
          <div className="tnp-func">
          <Button 
            buttonText="Add company data"
            backgroundColor="blue"
            textColor="white"
            />
            <Button 
            buttonText="Download statistics"
            backgroundColor="blue"
            textColor="white"
            handleClick={toggleModalVisibility}
            />
          </div>
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