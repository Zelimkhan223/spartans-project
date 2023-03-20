import css from  './Todo.module.css';

const Todo = (props) => {
    return (
        <div className={css.todoSection}>
            <div>
                <div>
                    <input checked={props.status} type="checkBox" />
                    <p className={props.status ? css.complite : ""}>{props.title}</p>
                </div>
                <div>
                    <button>Edit</button>
                    <button>Del</button>
                </div>
            </div>
        </div>
    );
};


export default Todo;