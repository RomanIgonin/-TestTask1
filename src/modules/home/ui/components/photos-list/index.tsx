import { FlatList } from 'react-native';
import React from 'react';
import * as S from '@src/modules/home/ui/styles';
import ImageModal from 'react-native-image-modal';
import { useAppSelector } from '@src/hooks';
import {
  isPhotosLoadingSelector,
  PhotosSelector,
} from '@src/modules/home/store/selectors';
import { Loader } from '@src/modules/loader/ui';

const PhotosList = () => {
  console.log('PhotosList');

  const photos = useAppSelector(PhotosSelector);
  const isPhotosLoading = useAppSelector(isPhotosLoadingSelector);

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

  if (isPhotosLoading || photos == null) {
    return <Loader />;
  } else {
    return (
      <FlatList
        data={photos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );
  }
};

export default PhotosList;
