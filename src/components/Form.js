import "./Form.css";

function Form() {
  return (
    <div>
      <div class="form-container">
        <form>
          <input class="note-text" type="text" placeholder="Take a note..." />
          <div class="form-actions">
            <div class="tooltip">
              <span class="material-symbols-outlined hover">check_box</span>
              <span class="tooltiptext">New list</span>
            </div>
            <div class="tooltip">
              <span class="material-symbols-outlined hover">brush</span>
              <span class="tooltiptext">New note with drawing</span>
            </div>
            <div class="tooltip">
              <span class="material-symbols-outlined hover">image</span>
              <span class="tooltiptext">New note with image</span>
            </div>
          </div>
        </form>
      </div>
      <div class="form-container active-form">
        <form>
          <input class="note-title" type="text" placeholder="Title" />
          <input class="note-text" type="text" placeholder="Take a note..." />
          <div class="form-actions">
            <div class="icons">
              <div class="tooltip">
                <span class="material-symbols-outlined hover">add_alert</span>
                <span class="tooltiptext">Remind me</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover">person_add</span>
                <span class="tooltiptext">Collaborator</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover">palette</span>
                <span class="tooltiptext">Background options</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover">image</span>
                <span class="tooltiptext">Add image</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover">archive</span>
                <span class="tooltiptext">Archive</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover">more_vert</span>
                <span class="tooltiptext">More</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover">redo</span>
                <span class="tooltiptext">Undo</span>
              </div>
              <div class="tooltip">
                <span class="material-symbols-outlined hover">undo</span>
                <span class="tooltiptext">Redo</span>
              </div>
            </div>
            <button class="close-btn">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
