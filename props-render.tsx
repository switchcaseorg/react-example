  //Wrapper
class WrapperComponent extends Component {
    render(){
      return <BaseComponent render={ name => (
        <h1>Hello, {name} </h1>
      )}/>
    }
  }


  class AnotherWrapper extends Component {
    render(){
      return <BaseComponent render={ name => (
        <p>Howdy Mister {name}!</p>
      )}/>
    }
  }

  //Share his logic
  class BaseComponent extends Component {
    state = {
      name: "Danny"
    }
  
    render(){
      this.props.render(this.state.name)
    }
  }

//------------------------------------------------------------------------------

  //Create hook
  export function useName(initialValue = "Danny") {
    const [name, setName] = useState(initialValue);
    return [name, setName];
  }

  //FC
  function WrapperComponent() {
    const [name, setName] = useName();
  
    return <h1>Good to see you today, {name}!</h1>
  }
  
  function AnotherWrapper extends Component {
    const [name, setName] = useName();
  
    return <p>Howdy Mister {name}!</p>
  }
