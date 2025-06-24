import { useState } from 'react'
import './App.css'
import ToDoCard from './ToDoCard';

function App() {

  const [info, setInfo] = useState("");
  const [newInfo, setNewInfo] = useState([]);

  function handleClick(event) {
    const {value} = event.target;
    setInfo(value)
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      newInfoClick();
    } 
  }

  function deleteItem(id) {
    setNewInfo(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function newInfoClick() {
    if (info == '') {
      null
    } else {
          setNewInfo(oldInfo => {
      return [...oldInfo, info];
    });
    setInfo('')
    }
  }

  return (
    <div className='card-to-do'>
      <img className='zakoryuchki' src="src\assets\zakoryuchki.png" alt="закорючки" />
      <div className='to-do'>
        <div className='header'>
          <h1>TO DO LIST</h1>

          <div className='input'>
            <input type="text" placeholder='что хочешь добавить?' onChange={handleClick} value={info} onKeyDown={handleKey}/>

            <div className='divIcon' onClick={newInfoClick}>
              <img src="src\assets\Variant10.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className='list'>
          {newInfo.map((item, index) => (
            <ul>
              <ToDoCard text={item} key={index} id={index} onChecked={deleteItem}/>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
