import styled from 'styled-components';
import { transparentize } from 'polished';
import Box from '@pagerland/common/src/components/Box';
import { colors } from '../../styles';

export const MemberCard = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const MemberImageWrapper = styled(Box)`
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
  border-radius: 80px 0;
  overflow: hidden;
  background-color: ${colors.gray[5]};
  box-shadow: 0 12px 28px ${transparentize(0.84, colors.primary)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const RoleChip = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  background-color: ${transparentize(0.88, colors.accent)};
  color: ${colors.accent};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  margin: 0 0 24px 0;
  color: ${colors.gray[1]};
  font-size: 15px;
  line-height: 1.6;
  text-align: center;
`;

export const LinkedinLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid ${transparentize(0.7, colors.primary)};
  transition: all 0.2s ease;

  svg {
    display: block;
    fill: ${colors.primary};
    transform: translateY(-2px);
    transition: fill 0.2s ease;
  }

  &:hover {
    background-color: ${colors.primary};
    color: white;
    border-color: ${colors.primary};

    svg {
      fill: white;
    }
  }
`;
