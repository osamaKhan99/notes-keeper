import React from "react";
import { connect } from "react-redux";
import { Restore, ClearNote } from "../Redux/action";
import "../assets/css/note.css";

function Delete(props) {
  const moveTo = (id, item) => {
    Restore(id, item);
    ClearNote();
  };
  return (
    <div className="home-container">
      {props.delete.length ? (
        props.delete.map((item, i) => {
          console.log(item);
          return (
            <div
              className="note-item"
              key={i}
              style={{ backgroundColor: `${item.note.bgColor}` }}
            >
              <h3 aria-label="Title" className="item-title">
                {item.note.title}
              </h3>
              <p aria-label="Note" className="item-description">
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
                  onClick={() => moveTo(item.id, item.note)}
                >
                  Restore
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="empty-title">You have no Delete items</h2>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    delete: state.delete,
  };
};

export default connect(mapStateToProps, { Restore, ClearNote })(Delete);
