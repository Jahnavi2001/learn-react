import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div className="text-center my-8">
        <h1 className="font-bold text-lg">This is About us</h1>
        <UserContext.Consumer>
          {(data) => <div>Logged User Name: {data.loggedInUser}</div> }
        </UserContext.Consumer>

        <User
          name={"Jahnavi Vuyyuru (Functional Component)"}
          location={"AndhraPradesh"}
          contact={"@JahnaviVuyyuru"}
        />
        {/* <UserClass name={"First"} location={"AndhraPradesh"} /> */}

        {/* <UserClass name={"Second"} location={"Karnataka"} />

        <UserClass name={"Third"} location={"Karnataka"} /> */}
      </div>
    );
  }
}

export default About;
