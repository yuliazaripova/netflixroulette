import * as React from 'react';

import Footer from './footer';

describe("Footer component", () => {
  it("should render Footer component", () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  })
})