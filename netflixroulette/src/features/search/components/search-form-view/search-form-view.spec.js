import * as React from 'react';

import SearchFormView from './search-form-view';

describe("SearchFormView component", () => {
  it("should render SearchFormView component", () => {
    const component = shallow(<SearchFormView />);
    expect(component).toMatchSnapshot();
  })
});
