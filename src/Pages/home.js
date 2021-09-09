import React, { useState } from "react";
import { connect } from "react-redux";
import { CirclePicker } from "react-color";
import NoteInput from "../Components/noteInput";
import { EdiNote, Archive, ClearNote, DeleteNote } from "../Redux/action";
import Search from "../Components/search";
import "../assets/css/note.css";

function Home(props) {
  const [showColor, setShowColor] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");
  const handleChangeComplete = (id, color, event) => {
    props.EdiNote(id, color.hex);
    setShowColor(false);
  };

  const moveToArchive = (id, item) => {
    props.Archive(id, item);
  };
  const moveToDelete = (id, item) => {
    props.DeleteNote(id, item);
  };
  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
      <NoteInput />
      <div className="home-container">
        {
          props.notes
            ? props.notes
            // eslint-disable-next-line array-callback-return
                .filter((item) => {
                  if (SearchQuery === "") {
                    return item;
                  } else if (
                    item.note.title
                      .toLowerCase()
                      .includes(SearchQuery.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item, i) => {
                  return (
                    <div
                      className="note-item"
                      key={item.id}
                      style={{ backgroundColor: `${item.note.bgColor}` }}
                    >
                      <h3
                        contentEditable="true"
                        suppressContentEditableWarning="true"
                        aria-label="Title"
                        className="item-title"
                      >
                        {item.note.title}
                      </h3>
                      <p
                        contentEditable="true"
                        suppressContentEditableWarning="true"
                        aria-label="Note"
                        className="item-description"
                      >
                        {item.note.description}
                      </p>
                      <div>
                        {item.note.list ? (
                          <ul>
                            <li>{item.note.list}</li>
                          </ul>
                        ) : null}
                      </div>
                      <div key={item.id}>
                        <button
                          className="c-btn"
                          onClick={() =>
                            setShowColor((showColor) => !showColor)
                          }
                        >
                          Change Color
                        </button>
                        <button
                          className="c-btn"
                          onClick={() => moveToArchive(item.id, item.note)}
                        >
                          Archive
                        </button>
                        <button
                          className="c-btn"
                          onClick={() => moveToDelete(item.id, item.note)}
                        >
                          Delete
                        </button>
                        {showColor && (
                          <CirclePicker
                            className="colorPicker"
                            ColorSize="18"
                            circleSpacing={6}
                            colors={[
                              "#fff",
                              "#F8C5C5",
                              "#F3AB6F",
                              "#7EFFA4",
                              "#90DAFF",
                            ]}
                            color={props.notes.bgColor}
                            onChange={(e) => handleChangeComplete(item.id, e)}
                          />
                        )}
                      </div>
                    </div>
                  );
                })
            : null
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    update: state.update,
  };
};

export default connect(mapStateToProps, {
  EdiNote,
  Archive,
  ClearNote,
  DeleteNote,
})(Home);
