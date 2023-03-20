import '../createTodo/CreateTodo.module.css';

const CreateTodo = () => {
    return (
        <div>
            <input type="text" placeholder="Enter some todo"/>
            <button className='btn'>+Add</button>
        </div>
            
    )
}

export default CreateTodo;