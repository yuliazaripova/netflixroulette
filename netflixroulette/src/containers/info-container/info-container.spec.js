import * as React from 'react';

import InfoContainer from './info-container';

describe("InfoContainer component", () => {
  it("should render InfoContainer component", () => {
    const component = shallow(<InfoContainer/>);
    expect(component).toMatchSnapshot();
  })
})