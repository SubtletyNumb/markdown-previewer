import { createRef, useEffect } from 'react';
import '../style-sheets/Previewer.css'
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
const Previewer = ({text}) => {
 
  const myPreviewRef = createRef();
  useEffect(() => {
    const previewText = marked.parse(text, {breaks: true});
    myPreviewRef.current.innerHTML = previewText;
  },[text])
  
  return(
    <div className='previewer-box'>
      <div className='previewer-header'>
      <h4>PREVIEW</h4>
      <i><FontAwesomeIcon icon={faCode}/></i>
      </div>
      <div id="preview" ref={myPreviewRef} className='previewer'></div>
    </div>
  )
}
export default Previewer;