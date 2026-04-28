import styled from 'styled-components';
import { transparentize } from 'polished';
import Img from '@pagerland/common/src/components/Img';
import { colors } from '../../styles';

export const RoundedImage = styled(Img)`
  border-radius: 48px;
  box-shadow: 0 12px 28px ${transparentize(0.84, colors.primary)};
`;
