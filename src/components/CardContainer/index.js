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
    
    return dataKey.length && this.props[dataKey].map(item => {
      return <Card key={item.id} item={item}/>;
    });
  }

  render () {
    const { dataKey } = this.props;

    return (
      <div>
        <div className='image-container'>
          { dataKey === 'resources' && <h1 className='res'>Resources</h1> }
          { dataKey === 'tickets' && <h1 className='tickets'>Tickets</h1> }
        </div>
        <section className='card-container' >
          {this.makeDynamicCard()}
        </section>
      </div>
        
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