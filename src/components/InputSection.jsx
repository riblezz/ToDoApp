import '../styles/InputSection.css'

const InputSection = ({handleClick, info, handleKey, newInfoClick}) => {
    return (
        <div className='header'>
            <h1>TO DO LIST</h1>

            <div className='input'>
                <input type='text' placeholder='What would you like to add?' onChange={handleClick} value={info} onKeyDown={handleKey}/>

                <div className='divIcon' onClick={newInfoClick}>
                    <img src='src\assets\Variant10.svg' alt='plus' />
                </div>
            </div>
        </div>)
    
}

export default InputSection;