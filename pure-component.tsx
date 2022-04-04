// FUNCTIONAL COMPONENT
function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
    return (
      <div>
        <h6>{ label }</h6>
        <span>{ Math.round(score / total * 100) }%</span>
      </div>
    )
  }
  
  
  // CONVERTED TO PURE COMPONENT
  class PercentageStat extends React.PureComponent {
  
    render() {
      const { label, score = 0, total = Math.max(1, score) } = this.props;
  
      return (
        <div>
          <h6>{ label }</h6>
          <span>{ Math.round(score / total * 100) }%</span>
        </div>
      )
    }
  
  }

  import React from 'react';
import { pure } from 'recompose';

function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
  return (
    <div>
      <h6>{ label }</h6>
      <span>{ Math.round(score / total * 100) }%</span>
    </div>
  )
}

// Wrap component using the `pure` HOC from recompose
export default pure(PercentageStat);


//----------------------------------------------------------------

import React from 'react';
import { pure } from 'recompose';

function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
  return (
    <div>
      <h6>{ label }</h6>
      <span>{ Math.round(score / total * 100) }%</span>
    </div>
  )
}

// Wrap component using the `pure` HOC from recompose
export default pure(PercentageStat);