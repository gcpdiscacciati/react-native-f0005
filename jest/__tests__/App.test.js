import 'react-native';
import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Testing App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
