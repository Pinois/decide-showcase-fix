import styled from 'styled-components';
import Box from '@pagerland/common/src/components/Box';

export const MemberCard = styled(Box)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(0, 48, 61, 0.15);
  }
`;
