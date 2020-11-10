import * as React from 'react';

import ErrorBoundary from './error-boundary';



function ProblemChild() {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>; 
}

describe('<ErrorBoundary />', () => {
  it('should catch errors with componentDidCatch', () => {
    const spy = spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    mount(<ErrorBoundary><ProblemChild /></ErrorBoundary>);
    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled();
  });
});