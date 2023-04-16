import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Sidebar from "./components/Sidebar/Sidebar";
import Notes from "./components/Notes/Notes";

function App() {
  return (
    <div>
      <Navbar />
      <Modal />
      <Form />
      <Sidebar />
      <Notes />
    </div>
  );
}

export default App;
