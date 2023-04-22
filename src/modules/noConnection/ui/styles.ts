import styled from '@emotion/native';
import { Image, Text, View } from 'react-native';
import { FONT_SIZE_MEDIUM } from '@src/constants';

export const Main = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.color.white};
`;

export const Icon = styled(Image)`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const InfoText = styled(Text)`
  color: ${props => props.theme.color.black};
  font-size: ${() => `${FONT_SIZE_MEDIUM}px`};
`;
