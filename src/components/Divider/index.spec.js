import React from 'react';
import {render} from '@testing-library/react-native';
import Divider from '.';

describe('Unit | Divider', () => {
  it('renders the component correctly and with the default style', () => {
    const wrapper = render(<Divider />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
