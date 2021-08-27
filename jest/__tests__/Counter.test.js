import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import Counter from '../src/Counter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

describe('Testing App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Counter count={5} />);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({count: 10});
    expect(wrapper).toMatchSnapshot();
  });
});
