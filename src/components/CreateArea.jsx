import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  // UseState hook to  track expand function
  const [isExpanded, setExpanded] = useState(false);

 // UseState hook to  keep track of the title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

//use setnote to update initial state of note
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });

  }

  //Handle submit function
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
   
    // return to  initial state 
    setNote({
      title: "",
      content: ""
    });

  }
//useState function to expand createarea
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
