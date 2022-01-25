import { useState, useEffect } from 'react'

const AddEditInputButton = ({onSubmit, mode, inputPredefinedValue}) => {
  const [inputVal, setInputVal] = useState(inputPredefinedValue);

  useEffect(() => {
    setInputVal(inputPredefinedValue);
  }, [inputPredefinedValue])

  const handleOnSubmit = () => {
    onSubmit(inputVal)
    setInputVal('')
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (mode === 'Edit' && value === '') {
      setInputVal(inputPredefinedValue)
    } else {
      setInputVal(e.target.value)
    }
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputVal) {
      handleOnSubmit()
    }
  }

  return (
    <div className="columns mt-2">
      <div className="column is-four-fifths">
        <input
          className="input"
          placeholder="Add an item"
          onChange={handleInputChange}
          value={inputVal}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="column">
        <button className="button" onClick={handleOnSubmit}>{mode}</button>
      </div>
    </div>
  )
}

export default AddEditInputButton