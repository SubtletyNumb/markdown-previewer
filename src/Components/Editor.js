import '../style-sheets/Editor.css'
import { setInput } from '../Features/editorSlice/editorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createRef, useEffect, useState } from 'react';
import { setDefaultInput } from '../Features/editorSlice/editorSlice';

const Editor = () => {
  const dispatch = useDispatch();
  const textRef = createRef();
  useEffect(()=>{
    const defTextURL = require('../firstLoadText.md')
    fetch(defTextURL).
    then(response => response.text()).
    then(text => {
      dispatch(setDefaultInput(text))
    });  
  },[])
  let editorText = useSelector((store) => store.editor.defaultInput);
  return(
    <div className='editor-box'>
      <div className='editor-header'>
      <h4>MARKDOWN</h4>
      </div>
      <textarea ref={textRef} onChange={() => dispatch(setInput({text: textRef.current.value}))} id="editor" className='editor' defaultValue={editorText}>
      </textarea>
    </div>
  )
}
export default Editor;
