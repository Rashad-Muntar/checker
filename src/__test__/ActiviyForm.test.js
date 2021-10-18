import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ActivityForm from '../Containers/ActivityForm';

describe('Home', () => {
  beforeEach(() => {
    render(<ActivityForm />);
  });

  it('Renders Activity form component', () => {
    const tree = renderer.create(<ActivityForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
