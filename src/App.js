import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import './style-sheets/App.css';
import { setInput } from './Features/editorSlice/editorSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setDefaultInput } from './Features/editorSlice/editorSlice';
function App() {
  const dispatch = useDispatch()
  const previewText = useSelector((store) => store.editor.input);
  useEffect(()=>{
    const defTextURL = require('./firstLoadText.md')
    fetch(defTextURL).
    then(response => response.text()).
    then(text => {
      dispatch(setDefaultInput(text))
    });  
  },[])
  return (
    <div className="App">
      <main className='main'>
        <header className='header'>
        <h2 className='tittle'>Markdown Previewer</h2>
        </header>
        <section className='editor-main-container'> 
        <Editor />
        <Previewer text={previewText}/>
        </section>
      </main>
    </div>
  );
}

export default App;