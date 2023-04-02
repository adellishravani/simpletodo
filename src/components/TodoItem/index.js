import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteUser} = props
  const {title, id} = todoDetails
  const onDelete = id => {
    onDeleteUser(id)
  }
  return (
    <li className="todo">
      <p>{title}</p>
      <button className="btnn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
