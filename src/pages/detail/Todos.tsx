import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, selectTodos } from '../../redux/reducers/todosReducer'

const Todos: React.FunctionComponent = () => {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  return (
    <div>
      <h1 onClick={() => dispatch(addTodo('addd'))}>Hello redux toolkit</h1>
      {todos &&
        todos.map((e) => (
          <div key={e.id} onClick={() => dispatch(removeTodo(e.id))}>
            {e.text} - {e.id}
          </div>
        ))}
    </div>
  )
}

export default Todos
