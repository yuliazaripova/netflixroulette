import * as React from 'react';

import MovieDetailsView from '../movie-details-view';

describe("MovieDetailsView component", () => {
  it("should render MovieDetailsView component", () => {
    const testProps = {
        title: "test title",
        vote_average: 1,
        date: 2017,
        poster_path: "test poster",
        overview: "test overview",
        runtime: 1,
        genres: ["test genre1", "test genre2"],
    }
    const component = shallow(<MovieDetailsView {...testProps}/>);
    expect(component).toMatchSnapshot();
  })
})