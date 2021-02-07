import React from 'react'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test("renders without errors", () => {
    const wrapper = shallow(<App />)
    const appComponent = wrapper.find('[data-test="component-app"]')
    expect(appComponent.length).toBe(1)

})

test("renders without errors", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.render().length).toBe(1)
})

test("renders without errors", () => {
    const wrapper = shallow(<App />)
    const appComponent = wrapper.find('[data-test="component-app"]')
    expect(appComponent.hasClass('app')).toEqual(true)
})