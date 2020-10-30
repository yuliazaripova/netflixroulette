import * as React from 'react';

import MoviesResultsInfo from './movies-results-info';

describe("MoviesResultsInfo component", () => {
  it("should render MoviesResultsInfo component", () => {
    const component = shallow(<MoviesResultsInfo qt={1}/>);
    expect(component).toMatchSnapshot();
  })
})