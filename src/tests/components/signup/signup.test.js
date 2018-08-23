import React from 'react'
import { shallow } from 'enzyme'
import SignupForm from "../../../components/signup/form";

test('should render SignupForm page correctly', () => {
  const wrapper = shallow(<SignupForm />)

  wrapper.find('TextField').at(0).simulate('change',{
    target: {
      value: 'xxx',
      id: 'email'
    }
  })

  expect(wrapper.state('email')).toEqual("xxx")
  expect(wrapper).toMatchSnapshot()
})