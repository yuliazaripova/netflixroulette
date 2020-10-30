import * as React from 'react';

import MoviesList from './movies-list';

describe("MoviesList component", () => {
  it("should render MoviesList component", () => {
    const testProps = [{
        id: 1,
        title: "test title",
        vote_average: 1,
        release_date:  "2017-12-13",
        poster_path: "test poster",
        overview: "test overview",
        runtime: 1,
        genres: ["test genre1", "test genre2"],
    }, 
    {
      id: 2,
      title: "test title2",
      vote_average: 2,
      release_date:  "2017-12-13",
      poster_path: "test poster2",
      overview: "test overview2",
      runtime: 1,
      genres: ["test genre1", "test genre2"],
  }]
    const component = shallow(<MoviesList data={testProps}/>);
    expect(component).toMatchSnapshot();
  })
})