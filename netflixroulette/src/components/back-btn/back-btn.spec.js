import * as React from 'react';

import BackBtn from './back-btn';

describe("BackBtn component", () => {
  it("should render BackBtn component", () => {
    const component = shallow(<BackBtn />);
    expect(component).toMatchSnapshot();
  })
  it("should handle click", () => {
    const handleClick = jest.fn();
    const component = shallow(<BackBtn onClick={handleClick}/>);
    component.simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  })
})