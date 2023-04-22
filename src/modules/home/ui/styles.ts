import styled from '@emotion/native';
import { Image, Platform, Pressable, Text, View } from 'react-native';
import { FONT_SIZE_MEDIUM, FONT_SIZE_SMALL } from '@src/constants';

export const Main = styled(View)`
  flex: 1;
  justify-content: center;
  background: ${props => props.theme.color.white};
`;

export const Email = styled(Text)`
  color: ${props => props.theme.color.black};
  font-size: ${() => `${FONT_SIZE_MEDIUM}px`};
`;

export const HeaderWrapper = styled(Pressable)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.color.gray};
  height: 60px;
  padding: 0 20px;
`;

export const LogoutWrapper = styled(Pressable)``;

export const LogoutBtn = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const FooterWrapper = styled(Pressable)`
  background: ${props => props.theme.color.gray};
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled(Pressable)`
  align-items: center;
`;

export const TextLink = styled(Text)`
  font-size: ${() => `${FONT_SIZE_SMALL}px`};
  color: ${props => props.theme.color.black};
`;

export const Link = styled(Text)`
  font-size: ${() => `${FONT_SIZE_SMALL}px`};
  color: ${props => props.theme.color.blue};
  text-decoration-line: underline;
`;

export const PostWrapper = styled(View)`
  align-items: center;
  margin: 15px 15px 0 15px;
  ${Platform.OS === 'ios'
    ? 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);'
    : 'elevation: 5;'};
  background: ${props => props.theme.color.white};
  border-radius: 15px;
`;

export const PhotoWrapper = styled(Pressable)`
  margin-top: 15px;
`;

export const Title = styled(Text)`
  margin: 15px;
  font-size: ${() => `${FONT_SIZE_SMALL}px`};
  color: ${props => props.theme.color.black};
`;
