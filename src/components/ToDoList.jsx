import ToDoCard from './ToDoCard';
import '../styles/ToDoList.css'
const ToDoList = ({newInfo, deleteItem}) => {
    return (
        <div className='list'>
            <ul>
                {newInfo.map((item, index) => (
                    <li key={index}>
                        <ToDoCard text={item} onChecked={deleteItem} id={index}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;