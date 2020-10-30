import * as React from 'react';

import GenresInfo from './genres-info';

describe("GenresInfo component", () => {
  it("should render GenresInfo component", () => {
    const component = shallow(<GenresInfo genre={"testGenre"}/>);
    expect(component).toMatchSnapshot();
  })
})