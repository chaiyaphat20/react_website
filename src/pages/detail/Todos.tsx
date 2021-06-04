import React, { MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, selectTodos } from '../../redux/reducers/todosSlice'

const Todos: React.FunctionComponent = () => {
  const todos = useSelector(selectTodos)  
  const dispatch = useDispatch()
  const handleAddTodo = (e: MouseEvent<HTMLHeadingElement>) => {
    dispatch(addTodo('addd'))
  }
  const handleRemove = (e: number) => () => {
    dispatch(removeTodo(e))  
  }
  return (
    <div>
      <h1 onClick={handleAddTodo}>Hello redux toolkit</h1>
      {todos &&
        todos.map((e) => (
          <div key={e.id} onClick={handleRemove(e.id)}>
            {e.text} - {e.id}
          </div>
        ))}
    </div>
  )
}

export default Todos
