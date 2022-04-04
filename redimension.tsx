class WindowSizeDimensions extends React.Component {
    constructor(props){
      super(props);
      this.updateDimension = this.updateDimension.bind(this);
    }
     
    componentWillMount() {
      this.updateDimension()
    }
    componentDidMount() {
      window.addEventListener('resize', this.updateDimension)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimension)
    }
    updateDimension() {
      this.setState({width: window.innerWidth, height: window.innerHeight})
    }
    render() {
      return <span>{this.state.width} x {this.state.height}</span>
    }
   }
