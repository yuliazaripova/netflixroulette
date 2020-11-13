import * as React from 'react';

import RadioToolbar from './radio-toolbar';

describe("RadioToolbar component", () => {
  const testProps = {
    name: "test",
    items: [
            {
              id:"test1",
              value:"test value",
              isChecked: true
            },
            {
              id:"test2"
            }
          ]
        };
  const component = shallow(<RadioToolbar {...testProps}/>);

  it("should render RadioToolbar component", () => {
    expect(component).toMatchSnapshot();
  });

  // it('should change value', () => {
  // //  expect(component.find('input').at(0).props().checked).toBe(true)
  //   component.find('input').at(1).simulate('change', { target:  {name: 'test2', value: 'test2'} })
  //   component.update();
  //   expect(component.find('input').at(1).props().checked).toBe(true)
  // })
})