import * as React from 'react';

import Header from './header';

describe("Header component", () => {
  it("should render Header component without Btn", () => {
    const component = shallow(<Header/>);
    expect(component).toMatchSnapshot();
  })
  it("should render Header component with Btn", () => {
    const component = shallow(<Header renderBtn={true}/>);
    expect(component).toMatchSnapshot();
  })

})