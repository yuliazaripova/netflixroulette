import * as React from 'react';

import MovieDetails from './movie-details';

describe("MovieDetails component", () => {
  it("should render MovieDetails component", () => {
    const testProps = {
        id: 1,
        title: "test title",
        vote_average: 1,
        release_date:  "2017-12-13",
        poster_path: "test poster",
        overview: "test overview",
        runtime: 1,
        genres: ["test genre1", "test genre2"],
    }
    const component = shallow(<MovieDetails {...testProps}/>);
    expect(component).toMatchSnapshot();
  })
})