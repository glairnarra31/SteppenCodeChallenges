import { useState } from 'react'
import Item from './Item';

// Just assiging an empty array on items as default props
const ItemsContainer = ({ items = [], onEdit, onDelete }) => {
  const [isDeleteModalSet, setDeleteModal] = useState(false);

  const handleOnDelete = (index) => {
    onDelete(index);
    toggleModal();
  }

  const toggleModal = () => {
    setDeleteModal(!isDeleteModalSet);
  }

  return (
    <div className="container">
      {items.map((item, idx) => (
      // for key it should be something like id/uuid
      // just using idx here
        <Item item={item} index={idx} onEdit={onEdit} onDelete={toggleModal} key={idx}/>
      ))}
      <div className={`modal ${isDeleteModalSet && 'is-active'}`}>
      <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Are you sure you want to delete?</p>
            <button className="delete" aria-label="close" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
              Confirm delete?
          </section>
          <footer className="modal-card-foot">
            <button className="button is-danger" onClick={handleOnDelete}>Delete</button>
            <button className="button" onClick={toggleModal}>Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default ItemsContainer;