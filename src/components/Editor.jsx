import React from 'react'
import"./Editor.css"
import { useState , useRef } from 'react'

    const Editor = ({ onCreate }) => {

    const [content,setContent] =useState("");
    const contentRef = useRef() ;

    const onChangeContent = (e) =>{
        setContent(e.target.value)
    }

    const onKeydown = (e) =>{
        if (e.keyCode === 13){
            onSubmit();
        }
    };

    const onSubmit = () => {         //빈입력칸에 추가를 누를시 추가 되지 않고 입력하라는 의미로 포커스가 잡힌다.
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("");               // 추가 누른후 입력창에 내용들이 사라지게 
    }

  return (
    
    <div className='Editor'>
        <input 
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
         onChange={onChangeContent} 
         placeholder='새로운 Todo...'
         />
        <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;

