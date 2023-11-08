import React from 'react';
import {render} from '@testing-library/react-native';
import Badge from './Badge';

describe('Badge', () => {
  it('renders correctly when read is false', () => {
    const {getByTestId} = render(<Badge read={false} />);
    const badgeView = getByTestId('badgeView');
    expect(badgeView).toBeTruthy();
  });

  it('does not render when read is true', () => {
    const {queryByTestId} = render(<Badge read={true} />);
    const badgeView = queryByTestId('badgeView');
    expect(badgeView).toBeNull();
  });

  it('displays the correct number when read is a number', () => {
    const {getByText} = render(<Badge read={42} />);
    const badgeText = getByText('42');
    expect(badgeText).toBeTruthy();
  });

  it('displays "99" when read is greater than 99', () => {
    const {getByText} = render(<Badge read={100} />);
    const badgeText = getByText('99');
    expect(badgeText).toBeTruthy();
  });

  it('does not display text when read is 0', () => {
    const {queryByTestId} = render(<Badge read={0} />);
    const badgeView = queryByTestId('badgeView');
    expect(badgeView).toBeNull();
  });
});
