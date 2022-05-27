import React,{useState,useRef} from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';
const App = () => {

      let editorState = EditorState.createEmpty();
      const [description, setDescription] = useState(editorState);

      const onEditorStateChange = (editorState) => {
        setDescription(editorState);
      }
      const data=useRef();
      const addDetails = async (event) => {
        try {
          event.preventDefault();
          event.persist();
          alert(data.current.value);
        } catch (error) { throw error;}    
      } 


  return (
    <div className="App">
    <div className="container">
      <div className="row"> 
        <form onSubmit={addDetails} className="update__forms">
          <div className="form-row">
            <div className="form-group col-md-12 editor">
              <label className="font-weight-bold"> Description <span className="required"> * </span> </label>
                <Editor
                  editorState={description}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={data} value={draftToHtml(convertToRaw(description.getCurrentContent())) } />
            </div>
            <div className="form-group col-sm-12 text-right">
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </div> 
          </div> 
        </form>
        {data.current?.value}
        <div dangerouslySetInnerHTML={{ __html: data.current?.value}}/>
      </div>
    </div>
  </div>
  )
}

export default App