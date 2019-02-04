import splitter from 'common-functions/splitter';

export default {
  Home: splitter(() => import('pages/home')),
};
