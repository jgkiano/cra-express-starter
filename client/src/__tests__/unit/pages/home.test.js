import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import Home from 'pages/home';

describe('home component test', () => {
  let wrap;
  beforeEach(() => {
    wrap = mount(
      <Root>
        <Home />
      </Root>,
    );
  });
  afterEach(() => {
    wrap.unmount();
  });
  it('displays hello world message', () => {
    expect(wrap.find('div').text()).toEqual('Hello World');
  });
});
