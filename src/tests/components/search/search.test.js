import React from 'react'
import { shallow } from 'enzyme'
import SearchFrom from "../../../components/search/search";

test('should render SearchFrom page correctly', () => {
  const wrapper = shallow(<SearchFrom />)

  wrapper.find('TextField').at(0).simulate('change',{
    target: {
      value: '42'
    }
  })

  expect(wrapper.state('search')).toEqual("42")

  expect(wrapper).toMatchSnapshot()
})