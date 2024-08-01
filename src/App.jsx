import './App.css'
import { useRef, useReducer, useState } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Filter from './components/Filter'



const mockData =[
  {  
     id:0,
     isDone: false,
     content: 'React 공부하기',
     date: new Date().getTime(),
   
   },
   {  
     id:1,
     isDone: false,
     content: '빨래하기',
     date: new Date().getTime(),
   
   },
   {  
     id:2,
     isDone: false,
     content: '노래연습하기',
     date: new Date().getTime(),
   
   }
 ]

function reducer(state, action){
  switch(action.type){
    case 'CREATE':
       return [action.data,...state]
       case 'UPDATE':
        return state.map((item)=>item.id === action.targetId ? 
        {...item, isDone: !item.isDone} : item)
        case 'DELETE':
          return state.filter((item) => item.id !== action.targetId)
        default: 
        return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)
  const [filter, setFilter] = useState('all'); // filter 상태 추가

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    },
    })  
  } 


  const onUpdate =(targetId)=> {
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  }

 const onDelete = (targetId) =>{
  dispatch({
    type: "DELETE",
    targetId: targetId
  })
 }
  
 const getFilteredTodos = () => {
  switch (filter) {
    case 'completed':
      return todos.filter(todo => todo.isDone);
    case 'active':
      return todos.filter(todo => !todo.isDone);
    default:
      return todos;
  }
};

  
  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={getFilteredTodos()} 
      onUpdate={onUpdate} 
      onDelete={onDelete}
      filter={filter}   // 전달
      setFilter={setFilter}  // 전달
      />
    
    </div>
  )
}

export default App
