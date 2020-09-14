import React from "react";

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: ""
    };
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log("new", this.state)
    );
  };

  onSubmit = (event) => {
    const { firstName, lastName, phoneNumber } = this.state;
    this.props.onAdd({
      firstName,
      lastName,
      phoneNumber
    });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <div>
          firstName : <input name="firstName" />
        </div>
        <div>
          lastName : <input name="lastName" />
        </div>
        <div>
          phoneNumber : <input name="phoneNumber" />
        </div>
        <button type="submit"> Add me</button>
      </form>
    );
  }
}

export default PersonalForm;
