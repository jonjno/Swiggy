import UserContext from "../utils/UseerContect";
import User from "./User";
import UseClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(" Parent Constructor ");
  }
  componentDidMount() {
    console.log("Parent componentdidmount");
    // API Calls
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <User name={"Jino John -function Props"} />
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            <h1 className='text-bod'>{loggedInUser}</h1>;
          }}
        </UserContext.Consumer>

        {/* <UseClass name={"Jino John - Class props"} location={"Kollam "} />
        <UseClass name={"elon musk - Class props"} location={"cali "} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <User name={"Jino John -function Props"} />
//       <UseClass name={"Jino John - Class props"} location={"Kollam "} />
//     </div>
//   );
// };

export default About;
