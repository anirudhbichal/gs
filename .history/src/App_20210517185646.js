import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Timer from "./components/countdown/Timer";

function App() {
  return (
    <div className="App">
      <Container className="my-5">
        <h1>
          Gnana Satra 2021
        </h1>
        <h2 className="mb-5">Live In</h2>
        <Timer />
        <h4 className="mt-5 css-typing">
          Annual Gnana Satra this year from 26/5/2021 to 1/6/2021 from 7 pm to 8pm by Shri PT Venkatagirish Achar
        </h4>
        <h4 className="mt-3">
          Topic: Sundarakanda
        </h4>
        <h4>
          Location: Zoom (Meeting Link will be updated soon)
        </h4>
      </Container>
    </div>
  );
}

export default App;
