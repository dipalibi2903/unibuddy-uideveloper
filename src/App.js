import React from "react";
import "./styles.css";
import InformationTable from "./component/InformationTable";
import PersonalForm from "./component/PersonalForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPeople: []
    };
  }

  onAdd = (people) => {
    let newList = [...this.state.listOfPeople, people];
    this.setState({
      listOfPeople: newList
    });
  };

  render() {
    return (
      <div>
        <PersonalForm onAdd={this.onAdd} />
        <InformationTable listOfPeople={this.state.listOfPeople} />
      </div>
    );
  }
}

export default App;
