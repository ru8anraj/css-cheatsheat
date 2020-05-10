import React from 'react';
import { mount } from 'enzyme';
import { Header } from '../../../main/components'

const suite =
  'src/test/components/header/header.test.js';

describe(suite , function descTestHeaderComponentSuite() {
    it('should test render', function testHeaderComponentRender() {
        const component = mount(<Header />);
        expect(component).toBeDefined();
        expect(component.length).toBe(1);
    });
})