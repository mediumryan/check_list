import './CSS/index.css';
import './CSS/reset.css';
import {React, useState, useEffect} from 'react';

export default function App() {

  const [value, setValue] = useState('');
  const [list, setList] = useState([
    {
      id : 0,
      title : '놀기',
      checked : true,
    },
    {
      id : 1,
      title : '먹기',
      checked : true,
    },
    {
      id : 2,
      title : '자기',
      checked : true,
    },
  ]);

  function getValue(e) {
    setValue(e.target.value);
  }

  function addItem(e) {
    e.preventDefault();
    const copy = [...list];
    const newId = (copy.length);
    copy.push(
      {
      id : newId,
      title : value,
      checked : true,
      }
    );
    setList(copy);
    setValue('');
  }
  
  return (
    <div id='main-container'>
      <div id='list-container'>
        {
          list.map((item,index) => {
            return(
              <ListItem 
                item={item} 
                key={index}
                i={index}
                list={list}
                setList={setList}
                />
            )
          })
        }
        <form id='input-form' onSubmit={addItem}>
          <input 
            className='input-box'
            type='text'
            onChange={getValue}
            value={value}
            />
          <button className='input-btn'>추가하기</button>
          <button className='del-btn'>선택삭제</button>
        </form>
      </div>
    </div>
  )
}

const ListItem = ({item, list, setList, i}) => {

  function handleCheck() {
    const copy = [...list];
    copy[i].checked = !copy[i].checked;
    setList(copy);
  }
  
  return(
    <div className='list-item'>
      <div className='list-content'>
        <p className='list-days'>{item.id+1}일차</p>
        <p className='list-title'>{item.title}</p>
      </div>
      <input 
        className='list-btn'
        type='checkbox' 
        checked={item.checked}
        onChange={handleCheck}
        ></input>
    </div>
  )
}