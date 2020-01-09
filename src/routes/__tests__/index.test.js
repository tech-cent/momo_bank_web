import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../../components/landingPage/LandingPage';

describe('Routes', () => {
  it('should return the landing pagefor the root path', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']}>
        <LandingPage />
      </MemoryRouter>,
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
  });
});
