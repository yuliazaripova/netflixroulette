import * as React from 'react';

import SearchForm from './search-form';

describe("SearchForm component", () => {
  it("should render SearchForm component", () => {
    const component = shallow(<SearchForm />);
    expect(component).toMatchSnapshot();
  })
})