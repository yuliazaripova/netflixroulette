import * as React from 'react';

import Movie from './movie';

describe("Movie component", () => {
  it("should render Movie component", () => {
    const testData = {
      title: "test title",
      poster_path: "test poster",
      genres: ["test genre1", "test genre2"],
      release_date: "2017-12-13"
    }
    const component = shallow(<Movie data={testData}/>);
    expect(component).toMatchSnapshot();
  })
})