import * as React from 'react';

import App from './app';
import {http} from './app';

describe("App component", () => {
  it("should render App component", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  })
  // it("should click App component", () => {
  //   const component = shallow(<App />);
  //   const handleProductClick = jest.fn();
  //   const firstMovie = component.find('.movie').first();
  //   firstMovie.simulate('click');
  //   expect(handleProductClick.mock.calls.length).toEqual(1);
  // })
})


