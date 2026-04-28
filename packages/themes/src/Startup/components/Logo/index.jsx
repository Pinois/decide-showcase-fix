import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

import logo from '../../assets/Logo.svg';

const Img = styled.img`
  display: block;
  width: 110px;
  height: auto;
  ${base};
`;

const Logo = props => <Img src={logo} alt="Startup" {...props} />;

export default Logo;
