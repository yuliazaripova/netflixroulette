import * as React from 'react';

import MovieView from './movie-view';

describe("MovieView component", () => {
  it("should render MovieView component", () => {
    const testData = {
      title: "test title",
      poster_path: "test poster",
      genres: ["test genre1", "test genre2"],
      date: 2017
    }
    const component = shallow(<MovieView {...testData}/>);
    expect(component).toMatchSnapshot();
  })
})