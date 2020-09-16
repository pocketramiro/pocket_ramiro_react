import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollection } from '../../thunks/fetchCollection';
import  Card  from '../../components/Card';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import startCase from 'lodash/startCase';

const getDataKey = (pathname) => pathname.split('/').slice(-1)[0];

export class CardContainer extends Component {
  
  componentDidMount() { 
    this.props.fetchCollection(this.props.dataKey);
  }

  makeDynamicCard = () => {
    const { dataKey } = this.props;
    const dataObject = this.props[dataKey];
    if (!dataObject.data) {
      // For a non serialized response 
      return dataObject.map(item => {
        return <Card key={item.id} item={item}/>;
      });
      // For a serialized response 
    } else {
      return Array.isArray(dataObject.data) && dataObject.data.map(item => {
        return <Card key={item.id} type={item.type} item={item.attributes}/>;
      });
    }
  }
  componentDidUpdate(prevProps) {
    const {pathname: prevPathname} = prevProps.location;
    const {pathname} = this.props.location;

    if (prevPathname && prevPathname !== pathname) {
      this.props.fetchCollection(pathname);
    }
  }
 
  render () {
    const { dataKey } = this.props;
    const resourceId = parseInt(this.props.location.pathname.split('/').splice(-2, 1));

    return (
      <div>
        <div className='image-container'>
          <h1 className={dataKey}>{startCase(dataKey)}</h1>
        </div>
        <section className='card-container' >
          {this.makeDynamicCard()}
        </section>
        <Link to={{
          pathname: `/create-${dataKey}`,
          formProp: dataKey,
          itemId: resourceId
        }} className="create-btn-container">
          <button className="create-btn">Create {dataKey}</button>
        </Link>
      </div>  
    );
  }
}

export const mapStateToProps = (state, otherProps) => {
  const dataKey = getDataKey(otherProps.location.pathname);
  return {
    dataKey,
    [dataKey]: state[dataKey]  
  };
};

export const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCollection: (path) => dispatch(fetchCollection(path))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CardContainer)
);
