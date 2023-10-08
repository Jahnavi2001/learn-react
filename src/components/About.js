import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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
      <div>
        <h1>This is About us</h1>
        <h2>Here we are learning react</h2>
        <User name={'Jahnavi Vuyyuru (Functional Component)'} location={'AndhraPradesh'} contact={ '@JahnaviVuyyuru'} />
        {/* <UserClass name={"First"} location={"AndhraPradesh"} /> */}

        {/* <UserClass name={"Second"} location={"Karnataka"} />

        <UserClass name={"Third"} location={"Karnataka"} /> */}
      </div>
    );
  }
}

export default About;
