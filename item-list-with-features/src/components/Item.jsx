import { useState } from 'react'

const Item = ({ item, index, onEdit, onDelete }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = () => {
    setIsActive(false)
  }

  const handleOnEdit = () => {
    onEdit(index);
  }

  const handleOnDelete = () => {
    onDelete(index);
  }

  return (
    <div className="columns" onMouseEnter={handleFocus} onMouseLeave={handleBlur}>
      <div className="column">
        <article className="message">
          <div className="message-header">
            <p>List Item</p>
            {isActive &&
            <div>
              <button className="button is-small" onClick={handleOnEdit}>Edit</button>
              <button className="button is-danger ml-2 is-small" onClick={handleOnDelete}>Delete</button>
            </div>}
          </div>
          <div className="message-body">
            {item}
          </div>
      </article>
    </div>
  </div>
  )
}

export default Item;