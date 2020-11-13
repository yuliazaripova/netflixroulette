import * as React from 'react';

import MovieView from './movie-view';

describe("MovieView component", () => {
  it("should render MovieView component", () => {
    const testData = {
      data: {
        title: "test title",
        poster_path: "test poster",
        genres: [
          "test1",
          "test2",
          "test3"
        ],
        release_date: "1977-05-25"
      }
    }
    const component = shallow(<MovieView {...testData}/>);
    expect(component).toMatchSnapshot();
  })
})
