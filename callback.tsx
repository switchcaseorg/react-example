//  1. créez un rappel dans le composant parent, transmettez ce rappel comme accessoire.
function ParentComponent(props) {
    let [counter, setCounter] = useState(0);
    let callback = valueFromChild => setCounter(valueFromChild);
    return (
      <div>
        <p>Value of counter: {counter}</p>
        <ChildComponent callbackFunc={callback} counterValue={counter} />
      </div>
    );
    }
//2. child
function ChildComponent(props) {
    let childCounterValue = props.counterValue;
    return (
      <div>
        <button onClick={() => props.callbackFunc(++childCounterValue)}>
          Increment Counter
        </button>
      </div>
    );
    }