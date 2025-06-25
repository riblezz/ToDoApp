import { useState } from 'react';
import InputSection from './InputSection';
import ToDoList from './ToDoList';
import '../styles/ToDoContainer.css'

function ToDoContainer() {

  const [info, setInfo] = useState('');
  const [newInfo, setNewInfo] = useState([]);

  function handleClick(event) {
    const {value} = event.target;
    setInfo(value)
  }

  function handleKey(event) {
    if (event.key === 'Enter') {
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
    if (info.trim() == '') return;

    setNewInfo(oldInfo => {
      return [...oldInfo, info];
    });

    setInfo('');
  }

  return (
    <div className='card-to-do'>
      <img className='clips' src="src\assets\clips.png" alt='clips' />

      <div className='to-do'>
        <InputSection handleClick={handleClick} handleKey={handleKey} info={info} newInfoClick={newInfoClick} />
        <ToDoList newInfo={newInfo} deleteItem={deleteItem}/>
      </div>
    </div>
  )
}

export default ToDoContainer;
