function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
        <h2>Modal Header</h2>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default Modal;
