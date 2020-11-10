import * as React from 'react';

import Poster from './poster';

describe("Poster component", () => {
  it("should render Poster component", () => {
    const testProps = {
      title: "Test title",
      poster_path: "Test poster",
      classes: "testClass",
    }
    const component = shallow(<Poster {...testProps}/>);
    expect(component).toMatchSnapshot();
  })
})