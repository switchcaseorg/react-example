// Take in a component as argument WrappedComponent
function withNameReact(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component {
    render() {
      return <WrappedComponent name="React" {...this.props} />;
    }
  };
}

const Hello = ({ name }) => <h1>Hello {name}!</h1>;

const HelloReact = withNameReact(Hello);

// No need to send in the name prop, it is already sent in
// by the HOC. It will output Hello React!
<HelloReact />;




const withSearch = WrappedComponent => {
    class WithSearch extends React.Component {
      state = {
        searchTerm: ""
      };
      handleSearch = event => {
        this.setState({ searchTerm: event.target.value });
      };
  
      render() {
        let { searchTerm } = this.state;
        let filteredProducts = filterProducts(searchTerm);
        
        return (
          <>
            <input
              onChange={this.handleSearch}
              value={searchTerm}
              type="text"
              placeholder="Search"
            />
            <WrappedComponent data={filteredProducts} />
          </>
        );
      }
    };
    WithSearch.displayName = `WithSearch(${getDisplayName(WrappedComponent)})`;
    return WithSearch;
  };
  
  const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  
  
  // Render out products list with search feature
  const ProductsListWithSearch = withSearch(ProductsList);
  
  function App() {
    return (
      <div className="App">
        <ProductsListWithSearch />
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);