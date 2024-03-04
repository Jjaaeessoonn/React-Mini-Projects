/*
rafce is shortcut to autogenerate functional component
*/
import React from 'react';
import {accordionData} from './data';
import './styles.css';

const Accordion = () => {
  const [selected, setSelected] = React.useState(null);
  const [multiSelection, setMultiSelection] = React.useState([]);
  const [isMultiSelect, setIsMultiSelect] = React.useState(false);

  function handleSingleSelection(id) {
    const newId = id === selected ? null : id;
    setSelected(newId);
    console.log(newId);
  }

  function handleMultiSelection(id) {
    if (multiSelection.includes(id)) {
      // remove id from array
      const arr = [...multiSelection];
      const index = arr.indexOf(id);
      arr.splice(index,1); // remove the id from arr
      setMultiSelection(arr);
      console.log(`${id} is removed from array`);
      return
    }
    
    setMultiSelection([...multiSelection, id]);
    console.log(`Added ${id} to array`);
  }

  function toggleMultiSelect() {
    const currVal = !isMultiSelect;
    setIsMultiSelect(currVal);
    console.log(`isMultiSelect set to ${currVal}`);
    // reset all values
    setSelected(null);
    setMultiSelection([]);
  }

  return (
    <div className='wrapper'>
      <button onClick={toggleMultiSelect}> Enable Multi selection</button>
      <div className='accordion'>
        {
        accordionData && accordionData.length ? 
        accordionData.map( item => (
          <div className='item'>
            <div onClick={() => {
              if (!isMultiSelect) {
                handleSingleSelection(item.id)
              } else {
                handleMultiSelection(item.id)
              }
              }} className='title'>
              <h3>{item.question}</h3>
              <span>+</span>
            </div>
            {(selected === item.id || multiSelection.includes(item.id)) ? (
              <div className='content'>{item.answer}</div>
            ) : null}
          </div>
        )) : <div>No Data!</div>
        }
      </div>
    </div>
  )
}

export default Accordion