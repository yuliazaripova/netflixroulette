import * as React from 'react';

import Spinner from './spinner';

describe("Spinner component", () => {
  it("should render Spinner component", () => {
    const component = shallow(<Spinner />);
    expect(component).toMatchSnapshot();
  })
})