import React from 'react';
import Loadable from 'react-loadable';

export default (loader, loading = () => <span />) => Loadable({
  loader,
  loading,
});
