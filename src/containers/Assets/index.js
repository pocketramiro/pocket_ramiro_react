import React, { Component } from 'react';
import CardContainer from '../../components/CardContainer';

class Assets extends Component {  

  render() {
    return (
      <section>
        <h1>Machines</h1>
        <CardContainer history={this.props.location}/>
      </section>
    );
  }
}

export default Assets;