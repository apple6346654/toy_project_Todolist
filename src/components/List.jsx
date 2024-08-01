import React from 'react'
import './List.css'
import TodoItem from './TodoItem'
import { useState } from 'react'
import Filter from './Filter'


  const List = ({ todos ,onUpdate, onDelete, setFilter,filter}) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () =>{
    if(search ===""){
      return todos;
    }
    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLowerCase())
   )
  }

  const filteredTodos = getFilteredData()  

  return (
    <div className="List">
    
    <div className='Filter-list'>
    <h4 style={{display:'inline-block'}}>Todo List🌎</h4>
    <Filter  filter={filter} setFilter={setFilter} />
    </div>

    <input value={search} 
    onChange={onChangeSearch} 
    placeholder='검색어를 입력하세요.'
    />
    <div className='Todos_wrapper'>
       {filteredTodos.map((todo) => {
        return <TodoItem key= {todo.id} 
        {...todo}
         onUpdate={onUpdate}
         onDelete={onDelete}
         />
       })}
    </div>
    </div>
  )
}

export default List;