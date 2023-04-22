import styled from '@emotion/native';
import { Text, View } from 'react-native';
import { FONT_SIZE_MEDIUM } from '@src/constants';

export const LoaderContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoaderText = styled(Text)`
  color: ${props => props.theme.color.black};
  margin-top: 10px;
  font-size: ${() => `${FONT_SIZE_MEDIUM}px`};
  font-weight: bold;
`;
