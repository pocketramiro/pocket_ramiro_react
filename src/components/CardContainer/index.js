import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTickets } from '../../thunks/getTickets';
import { getResources } from '../../thunks/getResources';
import { getParts } from '../../thunks/getParts';
import { Card } from '../Card';
import startCase from 'lodash/startCase';
import resources from '../../assets/resources.jpg';


export class CardContainer extends Component {

  componentDidMount() {
    const { dataKey, id } = this.props;
    const actionName = `get${startCase(dataKey)}`;
    
    this.props.id ? this.props[actionName](id) : this.props[actionName] && this.props[actionName]();
  }

  makeDynamicCard = () => {
    const { dataKey } = this.props;
    //Needs to be refactored so different items can be accepted
    return dataKey.length && this.props[dataKey].map(ticket => {
      return <Card key={ticket.id} ticket={ticket}/>;
    });
  }

  render () {

    return (
      <section className='card-container' >
        <div className='image-container'>
        </div>
        {this.makeDynamicCard()}
      </section>
    );
  }
}

export const mapStateToProps = (state, otherProps) => {
  const { dataKey } = otherProps;
  
  return {
    [dataKey]: state[dataKey]  
  };
};

export const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  getResources: () => dispatch(getResources()),
  getParts: (id) => dispatch(getParts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);