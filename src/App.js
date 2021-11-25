import { Component } from "react";

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
      .then((users) => this.setState({ students: users }));
    // console.log("Students>>>>>", students);
  }

  render() {
    const { students } = this.state;
    console.log(students);

    return <div className="App"></div>;
  }
}

export default App;
