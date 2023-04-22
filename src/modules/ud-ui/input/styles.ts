import styled from '@emotion/native';
import { FONT_SIZE_SMALL } from '@src/constants';
import { View, Text, TextInput } from 'react-native';

export const TextWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 15px 0 15px;
`;

export const TextError = styled(Text)`
  color: rgba(255, 0, 0, 0.75);
  font-size: ${() => `${FONT_SIZE_SMALL}px`};
  margin: 3px 0 0 0;
`;

export const TextStyled = styled(Text)`
  font-weight: bold;
  font-size: ${() => `${FONT_SIZE_SMALL}px`};
  margin: 5px 0 5px 0;
  color: ${props => props.theme.color.black};
`;

export const TextInputStyled = styled(TextInput)`
  height: 40px;
  padding-left: 15px;
  padding-right: 10px;
  border-width: 1px;
  border-radius: 15px;
  font-size: ${() => `${FONT_SIZE_SMALL}px`};
  color: ${props => props.theme.color.black};
`;
