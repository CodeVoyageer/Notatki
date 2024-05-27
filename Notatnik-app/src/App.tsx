import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import "./Scss/app.scss";
function App() {
  return (
    <>
      <div className="division">
        <Sidebar />
        <Form />
      </div>
    </>
  );
}

export default App;
