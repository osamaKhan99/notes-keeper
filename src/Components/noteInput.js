import React, { useState } from "react";
import { CirclePicker } from "react-color";
import { AddNote } from "../Redux/action";
import { connect } from "react-redux";
import "../assets/css/noteInput.css";

function NoteInput(props) {
  const [input, setInput] = useState(true);
  const [note, setNote] = useState({
    title: "",
    description: "",
    list: "",
    bgColor: "#FFFFFF",
  });
  const [showColor, setShowColor] = useState(false);

  const toggle = () => {
    setInput(!input);
  };

  function handleInput(event, name) {
    const newData = {
      ...note,
    };
    newData[name] = event.target.value;
    setNote(newData);
  }
  const handleChangeComplete = (color, event) => {
    setNote({ ...note, bgColor: color.hex });
    setShowColor(false);
  };

  const submit = (e) => {
    e.preventDefault();
    props.AddNote({ ...note });
    setInput(!input);
    setNote("");
  };
  function handleKeyDown(e) {
    // Reset field height
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <div>
      {input === false ? (
        <form
          onSubmit={(e) => submit(e)}
          className="note-container"
          style={{ backgroundColor: `${note.bgColor}` }}
        >
          <input
            type="text"
            placeholder="Title"
            className="note-title"
            value={note.title}
            onChange={(e) => handleInput(e, "title")}
            style={{ backgroundColor: `${note.bgColor}` }}
          />
          <textarea
            placeholder="Take a note..."
            className="note-description"
            value={note.description}
            onChange={(e) => handleInput(e, "description")}
            style={{ backgroundColor: `${note.bgColor}` }}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div className="note-options">
            <div className="note-options-list">
              <button
                type="button"
                className="c-btn"
                onClick={() => setShowColor((showColor) => !showColor)}
              >
                Change Color
              </button>
            </div>

            <button className="btn" type="submit">
              Close
            </button>
          </div>
        </form>
      ) : (
        <div className="note-container" onClick={() => toggle()}>
          Take a note...
        </div>
      )}
      {showColor && (
        <CirclePicker
          className="colorPicker"
          ColorSize="18"
          circleSpacing={6}
          colors={["#fff", "#F8C5C5", "#F3AB6F", "#7EFFA4", "#90DAFF"]}
          color={note.bgColor}
          onChange={(e) => handleChangeComplete(e)}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { AddNote })(NoteInput);
