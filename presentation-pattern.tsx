//Presentation
const ListOfItems = (props) => {
    return (
    <ul>
        {props.items.map((item) => (
        <li key={item.id}>
            <a href={item.url}>{item.name}</a>
        </li>
        ))}
    </ul>
    );
};

//Container
class SeriesContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [],
        loading: false,
        error: ""
      };
    }
    componentDidMount() {
      this.setState({ loading: true, error: "" });
      fetch("https://api.tvmaze.com/schedule/web?date=2020-05-29")
        .then((res) => res.json())
        .then((data) => this.setState({ loading: false, series: data }))
        .catch((error) =>
          this.setState({ loading: false, error: error.message || error })
        );
    }
    render() {
      const { loading, error, series } = this.state;
      return (
        <div>
          <h1> Tv Series </h1>
          {loading && <p>Loading...</p>}
          {!loading && series && <ListOfItems items={series} />}
          {!loading && error && <p>{error}</p>}
        </div>
      );
    }
  }