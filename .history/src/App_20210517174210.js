import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Timer from "./components/countdown/Timer";

function App() {
  return (
    <div className="App">
      <Container className="my-7">
        <h1>
          Gnana Satra 2021
          <br />
          Live In
        </h1>
        <h4>
          Annual Gnana satra this year from 26/5/2021 to 1/6/2021 from 7 pm to 8pm by Shir PT Venkatagirish Achar
        </h4>
        <h4>
          Topic: Sundarakanda
        </h4>
        <h4>
          Location: Zoom (Meeting Link will be updated soon)
        </h4>
        <Timer />
      </Container>
    </div>
  );
}

export default App;
