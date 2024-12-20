import React from 'react';

import { ICONS, IconProps } from './types';
import HamburgerIcon from './hamburger-icon';

interface IconBaseProps extends IconProps {
  type: ICONS;
}

export function Icon({ color, size, type }: IconBaseProps) {
  const props = { color, size };

  switch (type) {
    case ICONS.hamburger_icon:
      return <HamburgerIcon {...props} />;

    default:
      return <p>Pick an Icon Type</p>;
  }
}
