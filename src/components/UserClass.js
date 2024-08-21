import React from "react";

class UseClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 5,

      userInfo: {
        name: "happy",
        location: "kollam",
      },
    };
    console.log(this.props.name + "child  constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child componentdidmount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const jsondata = await data.json();

    this.setState({
      userInfo: jsondata,
    });

    console.log(jsondata);

    this.timer = setInterval(() => {
      console.log("namset");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== this.prevState) {
      // useEffect thingi
    }
    console.log(this.props.name + "updated component");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "component will Unmount");
  }
  render() {
    const { name, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "child Rendering class");
    // Destructuring props
    const { nameap, location } = this.props;
    const { count2 } = this.state;
    return (
      <div className='user-card'>
        <h4>count = {this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h4>count = {count2}</h4>
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Loacatiom :{location}</h3>
        <h4>contact: 6692529857</h4>
      </div>
    );
  }
}

export default UseClass;
