import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((response) => this.setState({ students: response.students }));
  }

  render() {
    const { students } = this.state;
    console.log(this.state.students);

    return (
      <div className="main-container">
        {Object.keys(students).map((item) => (
          <div key={`${students[item].id}`}>
            <img className="profile_pic" src={`${students[item].pic}`} alt="" />
            <h1>
              {" "}
              {`${students[item].firstName}`}{" "}
              <span>{`${students[item].lastName}`} </span>
            </h1>
            <p>Email: {`${students[item].email}`}</p>
            <p>Company: {`${students[item].company}`}</p>
            <p>Skill: {`${students[item].skill}`}</p>
            <p>Average: {`${students[item].firstName}`}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
