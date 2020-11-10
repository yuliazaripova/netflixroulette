import * as React from 'react';

import Logo from './logo';

const setUp = () => shallow(<Logo/>);

describe ("Logo component", () => {
  it("should render Logo component", () => {
    const component = setUp();
  })
  it("should contain <h1> tag", () => {
    const component = setUp();
    const wrapper = component.find("h1");
    expect(wrapper.length).toBe(1);
  })
})