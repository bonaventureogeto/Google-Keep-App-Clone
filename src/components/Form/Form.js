import "./Form.css";

function Form() {
  return (
    <div>
      <div className="form-container">
        <form>
          <input
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div className="form-actions">
            <div className="tooltip">
              <span className="material-symbols-outlined hover">check_box</span>
              <span className="tooltiptext">New list</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">brush</span>
              <span className="tooltiptext">New note with drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">image</span>
              <span className="tooltiptext">New note with image</span>
            </div>
          </div>
        </form>
      </div>
      <div className="form-container active-form">
        <form>
          <input className="note-title" type="text" placeholder="Title" />
          <input
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div className="form-actions">
            <div className="icons">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  add_alert
                </span>
                <span className="tooltiptext">Remind me</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  person_add
                </span>
                <span className="tooltiptext">Collaborator</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">palette</span>
                <span className="tooltiptext">Background options</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltiptext">Add image</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">archive</span>
                <span className="tooltiptext">Archive</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  more_vert
                </span>
                <span className="tooltiptext">More</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">redo</span>
                <span className="tooltiptext">Undo</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">undo</span>
                <span className="tooltiptext">Redo</span>
              </div>
            </div>
            <button className="close-btn">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
