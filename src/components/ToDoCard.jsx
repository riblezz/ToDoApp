import '../styles/ToDoCard.css'

const ToDoCard = (props) => {
    return (
      <div className='card'>
        <p>{props.text} </p>

        <img src='src\assets\trash.svg' alt='trash' className='trash' onClick={() => {
          props.onChecked(props.id)
        }}/>
      </div>)
  }


export default ToDoCard;