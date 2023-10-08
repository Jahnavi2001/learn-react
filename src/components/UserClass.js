import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {}
    };

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
    const data = await fetch('https://api.github.com/users/Jahnavi2001')

    const json = await data.json()

    this.setState({
      userInfo: json
    })

    this.timer = setInterval(() => {
      console.log('LEARN REACT')
    }, 1000)

  }

  componentDidUpdate() {
    console.log(this.props.name + "Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log(this.props.name + 'Child ComponentWillUnmount')
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <img src={avatar_url } />
        <h2>Count2: {count2}</h2>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: @JahnaviVuyyuru</h5>
      </div>
    );
  }
}

export default UserClass;
