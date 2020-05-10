import React from 'react';
import { mount } from 'enzyme';
import { Home } from '../../../main/screens'

const suite = 'src/test/screens/home/home.test.js';

describe(suite, function descHomeScreenSuite() {
    it('should test render', function testHomeScreenComponent() {
        const component = mount(<Home />);
        expect(component).toBeDefined();
        expect(component.length).toBe(1);
    })
})