import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../client/src/components/Menu.jsx';
import MenuList from '../client/src/components/MenuList.jsx';
import MenuItem from '../client/src/components/MenuItem.jsx';
configure({ adapter: new Adapter() });

const testArray = [{ id: 1, "name": "Teacake", "description": "Quibusdam ut quia.", "price": 10 }];

describe("Menu", () => {
  it('should test react file existence', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should return text on top of page', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.text("<Text></Text>")).toContain('Menu');
  });

  it('should contains buttons - Lunch', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.text('<TopButton></<TopButton>')).toContain("Lunch");
  });

  it('should contains buttons - Dinner', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.text('<TopButton></<TopButton>')).toContain("Dinner");
  });

  it('should contains buttons - Dessert', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.text('<TopButton></<TopButton>')).toContain("Dessert");
  });

  it('should find MenuList', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find(<MenuList />)).toEqual({});
  });

})

describe('MenuList', () => {

  it('should test react file existence', () => {
    const wrapper = shallow(<MenuList lists={testArray} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should return closing text', () => {
    const wrapper = shallow(<MenuList lists={testArray} />);
    expect(wrapper.text("<ClosingText></ClosingText>")).toContain("Thank you for coming!");
  });

  it('should find collapse button', () => {
    const wrapper = shallow(<MenuList lists={testArray} />);
    expect(wrapper.text("<CollapseButton></CollapseButton>")).toContain("Collapse menu");
  });
});

describe("MenuItem", () => {
  it('should test react file existence', () => {
    const wrapper = shallow(<MenuItem items={testArray} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should find text', () => {
    const wrapper = shallow(<MenuItem items={testArray} />);
    expect(wrapper.text()).toEqual('TeacakeQuibusdam ut quia. $10');
  });

})