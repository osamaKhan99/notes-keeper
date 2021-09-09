import React from "react";
import { connect } from "react-redux";
import { Unarchive, ClearNote } from "../Redux/action";
import "../assets/css/note.css";

function Archive({ archive, Unarchive, ClearNote }) {
  const moveToHome = (id, item) => {
    Unarchive(id, item);
    ClearNote();
  };

  return (
    <div className="home-container">
      {archive.length ? (
        archive.map((item, i) => {
          console.log(item);
          return (
            <div
              className="note-item"
              key={i}
              style={{ backgroundColor: `${item.note.bgColor}` }}
            >
              <h3 placeholder="Title" className="item-title">
                {item.note.title}
              </h3>
              <p placeholder="Note" className="item-description">
                {item.note.description}
              </p>
              <div>
                {item.note.list ? (
                  <ul>
                    <li>{item.note.list}</li>
                  </ul>
                ) : null}
              </div>
              <div>
                <button
                  className="c-btn"
                  onClick={() => moveToHome(item.id, item.note)}
                >
                  Unarchive
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="empty-title">You have no Archive items</h2>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    archive: state.archive,
  };
};

export default connect(mapStateToProps, { Unarchive, ClearNote })(Archive);
