import React from 'react';
import * as S from '@src/modules/ud-ui/input/styles';
import { Controller } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';

interface Props {
  name: string;
  control: any;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export default function UDInput(props: Props) {
  const { name, control, ...otherProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <S.TextWrapper>
            <S.TextStyled>{name}</S.TextStyled>
            {error && <S.TextError>{error.message}</S.TextError>}
          </S.TextWrapper>
          <S.TextInputStyled
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardAppearance={'dark'}
            returnKeyType={'done'}
            clearButtonMode={'while-editing'}
            {...otherProps}
          />
        </>
      )}
    />
  );
}
