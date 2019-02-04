import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import PropTypes from 'prop-types';
import reducers from 'reducers';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));
  return <Provider store={store}>{children}</Provider>;
};
Root.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
Root.defaultProps = {
  initialState: {},
};
export default Root;
