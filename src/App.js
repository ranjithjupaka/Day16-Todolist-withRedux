import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './Actions/TodoActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddTodoAction(todo))
  }
  
  const handleRemove = (t) => {
    dispatch(RemoveTodoAction(t));
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h2> Todo List with redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Enter a todo'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: 'none',
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type='submit'
            style={{
              borderRadius: 50,
              height: 50,
              width: 50,
              marginLeft: 20,
            }}
          >
            GO
          </button>
        </form>
        <ul className='allTodos'>
          {todos &&
            todos.map((t) => (
              <li key={t.id} className='singleTodo'>
                <span className='todoText'>{t.todo}</span>
                <button
                  type='button'
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    border: '1px solid white',
                    color: 'white',
                    backgroundColor: 'orangered',
                  }}
                  onClick={() => handleRemove(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  )
}

export default App;
