class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = { message: "Hello, this is vivek" };
    }
    shouldComponentUpdate() {
      console.log("Does not get rendered");
      return false;
    }
    render() {
      console.log("Message is getting rendered");
      return (
        <div>
          <p>{this.state.message}</p>
        </div>
      );
    }
    }