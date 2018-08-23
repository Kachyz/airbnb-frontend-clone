import React from 'react'
import { shallow } from 'enzyme'
import Home from "../../pages/home";

test('should render Home page correctly', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper).toMatchSnapshot()
})

test('should call an onclick function', () => {

  const onClickSpy = jest.fn()

  const wrapper = shallow(<Home handleClick={onClickSpy} />)
  wrapper.find('div').at(0).simulate('click')
  expect(onClickSpy.mock.calls.length).toBe(1)

  expect(wrapper).toMatchSnapshot()
})