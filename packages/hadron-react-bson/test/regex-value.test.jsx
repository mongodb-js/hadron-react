import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BSONRegExp } from 'bson';
import { RegexValue } from '../';

describe('<RegexValue />', () => {
  const value = new BSONRegExp('test', 'i');
  const component = shallow(<RegexValue type="BSONRegExp" value={value} />);

  it('sets the base class', () => {
    expect(component.hasClass('element-value')).to.equal(true);
  });

  it('sets the type class', () => {
    expect(component.hasClass('element-value-is-bsonregexp')).to.equal(true);
  });

  it('sets the title', () => {
    expect(component.props().title).to.equal('/test/i');
  });

  it('sets the value', () => {
    expect(component.text()).to.equal('/test/i');
  });
});
