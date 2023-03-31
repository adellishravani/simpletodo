import './index.css'

const TodoItem = props => {
  const {tododetails, deleteuser} = props
  const {title, id} = tododetails
  onDelete = () => {
    deleteuser(id)
  }
  return (
    <div className="todo">
      <p>{title}</p>
      <button className="btnn" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
