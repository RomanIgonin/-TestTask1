import React, { useCallback, useEffect, useState } from 'react';
import * as S from '@src/modules/home/ui/styles';
import { LOGOUT } from '@src/constants';
import auth from '@react-native-firebase/auth';
import { Alert, FlatList, Linking } from 'react-native';
import { authActions } from '@src/modules/auth/store';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { UserSelector } from '@src/modules/auth/store/selectors';
import { getPhotos } from '@src/modules/home/store/action';
import {
  isPhotosLoadingSelector,
  PhotosSelector,
} from '@src/modules/home/store/selectors';
import Config from 'react-native-config';
import ImageModal from 'react-native-image-modal';
import { useNetInfo } from '@react-native-community/netinfo';
import NoConnectionScreen from '@src/modules/noConnection/ui';
import { NewTodoForm } from '@src/modules/home/ui/components/new-todo-form';
import { TodoList } from '@src/modules/home/ui/components/todo-list';
import { Loader } from '@src/modules/loader/ui';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserSelector);
  const photos = useAppSelector(PhotosSelector);
  const isPhotosLoading = useAppSelector(isPhotosLoadingSelector);
  const resourceUrl = Config.RESOURCE_URL;

  const netInfo = useNetInfo();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const onPressLogout = () => {
    auth().signOut();
    dispatch(authActions.signOut());
  };

  const onPressLink = async () => {
    const supported = await Linking.canOpenURL(resourceUrl);
    if (supported) {
      await Linking.openURL(resourceUrl);
    } else {
      Alert.alert(`URL is broken: ${resourceUrl}`);
    }
  };

  const keyExtractor = item => item.id;
  const renderItem = ({ item }: any) => {
    return (
      <S.PostWrapper>
        <S.PhotoWrapper>
          <ImageModal
            resizeMode="contain"
            imageBackgroundColor="#ffffff"
            style={{
              width: 100,
              height: 100,
            }}
            source={{ uri: item.url }}
          />
        </S.PhotoWrapper>
        <S.Title>{item.title}</S.Title>
      </S.PostWrapper>
    );
  };

  console.log('Home');

  const [Todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => setTodos(todos => [...todos, todo]);

  if (netInfo.isConnected !== true) {
    return <NoConnectionScreen />;
  } else {
    return (
      <S.Main>
        <S.HeaderWrapper>
          <S.Email>{user?.email}</S.Email>
          <S.LogoutWrapper onPress={onPressLogout}>
            <S.LogoutBtn source={LOGOUT} />
          </S.LogoutWrapper>
        </S.HeaderWrapper>

        <NewTodoForm addTodo={addTodo} />
        <TodoList Todos={Todos} />

        {isPhotosLoading || photos == null ? (
          <Loader />
        ) : (
          <FlatList
            data={photos}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        )}

        <S.FooterWrapper>
          <S.LinkWrapper onPress={onPressLink}>
            <S.TextLink>Ссылка на ресурс</S.TextLink>
            <S.Link>{resourceUrl}</S.Link>
          </S.LinkWrapper>
        </S.FooterWrapper>
      </S.Main>
    );
  }
}
