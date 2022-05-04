import React from 'react';
import { shallow, configure } from 'enzyme';

import Modal from './../src/containers/modal/index';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

it('snapshot modal', () => {
  const wrapper = shallow(<Modal title='title' />);
  expect(wrapper).toMatchSnapshot();
});


it('check input 1', () => {
  const wrapper = shallow(<Modal title='title' />);
  wrapper.find("#usd").simulate('change', { target: { value: 200 } })
  expect(wrapper.find("#usd").get(0).props.value).toEqual(200);
  expect(wrapper.find("#crypta").get(0).props.value).toBeGreaterThan(0)

});

it('check input 2', () => {
  const wrapper = shallow(<Modal title='title' />);
  wrapper.find("#crypta").simulate('change', { target: { value: 200 } })
  expect(wrapper.find("#crypta").get(0).props.value).toEqual(200);
  expect(wrapper.find("#usd").get(0).props.value).toBeGreaterThan(0)

});

it('check input err', () => {
  const wrapper = shallow(<Modal title='title' />);
  wrapper.find("#crypta").simulate('change', { target: { value: 0 } })
  expect(wrapper.find("#crypta").get(0).props.value).toEqual(0);
  expect(wrapper.find("#usd").get(0).props.value).toBeGreaterThan(0)
});