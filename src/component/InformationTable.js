import React from "react";

export default function InformationTable(props) {
  const { listOfPeople } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>lastname</th>
          <th>phonenumber</th>
        </tr>
      </thead>
      <tbody>
        {listOfPeople.length > 0 &&
          listOfPeople.map((person, keys) => (
            <tr key={keys}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.phoneNumber}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
