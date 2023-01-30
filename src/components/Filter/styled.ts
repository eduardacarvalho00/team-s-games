import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export interface FilterStyleProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => isActive && css`
      border: 1px solid ${theme.COLORS.GRAY_700}
  `}
  border-radius: 4px;
  margin-right: 12px;
  height: 28px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;
