import * as React from 'react';

import MovieDetailsView from '.';

describe("MovieDetailsView component", () => {
  it("should render MovieDetailsView component", () => {
    const data = {
        title: "test title",
        vote_average: 9,
        release_date: "1977-05-25",
        poster_path: "test poster",
        overview: "test overview",
        runtime: 1,
        genres: ["test genre1", "test genre2"],
      }
    
    const component = shallow(<MovieDetailsView data={data}/>);
    expect(component).toMatchSnapshot();
  })
})
