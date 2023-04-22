import styled from '@emotion/native';
import { FONT_SIZE_MEDIUM } from '@src/constants';
import { Pressable, Text } from 'react-native';

export const ButtonWrapper = styled(Pressable)`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  background-color: ${props => props.theme.color.blue};
  border-radius: 15px;
`;
export const Button = styled(Text)`
  font-size: ${() => `${FONT_SIZE_MEDIUM}px`};
  font-weight: bold;
  color: white;
`;
