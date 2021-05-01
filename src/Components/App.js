import { Row } from "react-bootstrap";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar"
import "./styles/app.scss"
import Widgets from "./Widgets/Widgets";


function App() {
  return (
    <div className="container-lg">
      <Row >
        <Sidebar />
        <Feed />
        <Widgets />
      </Row>

    </div>
  );
}

export default App;
