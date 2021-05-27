import React, { useState } from "react"
import './App.css';
import Modal from '../src/components/modal'
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          
        </Modal>
        ) : null}
    </div>
  );
}

export default App;
