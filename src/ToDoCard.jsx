  
  function ToDoCard(props) {

    return (
    <div className='card'>
      <div className="corner" />

      <li>{props.text} </li>

      <img src="src\assets\trash.svg" alt="мусарка" className="trash" onClick={() => {
        props.onChecked(props.id)
      }}/>
    </div>)
  }


export default ToDoCard;