import { useState } from 'react';
import AddEditInputButton from './components/AddEditInputButton';
import ItemsContainer from './components/ItemsContainer';

export const ItemList = () => {
  // Will just use built in app state here because state management will
  // just be an overkill
  const [items, setItems] = useState([]);
  // straightly using Edit and Add here for modes will be placed straightly
  // on the button label
  const [mode, setMode] = useState('Add');
  const [editIndex, setEditIndex] = useState(null);

  const onDelete = (index) => {
    // copy items state and do not splice directly
    const copy = [...items];
    copy.splice(index,1)
    setItems(copy)
  }

  const onEdit = (index) => {
    setEditIndex(index);
    setMode('Edit')
  }

  const onSubmit = (value) => {
    if (mode === 'Add') {
      setItems([...items, value])
    } else {
      const copy = [...items];
      copy.splice(editIndex, 1, value)
      setItems(copy)
      setMode('Add')
      setEditIndex(null);
    }
  }

  return (
    <div className="column is-half container">
      <ItemsContainer items={items} onEdit={onEdit} onDelete={onDelete}/>
      <AddEditInputButton
        onSubmit={onSubmit}
        mode={mode}
        inputPredefinedValue={mode === 'Edit' ? items[editIndex] : ''}
      />
    </div>
  )
}
