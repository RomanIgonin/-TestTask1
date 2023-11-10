import React, { useEffect, useState } from 'react';
import * as S from '@src/modules/home/ui/styles';
import { useAppDispatch } from '@src/hooks';
import { getPhotos } from '@src/modules/home/store/action';
import { useNetInfo } from '@react-native-community/netinfo';
import NoConnectionScreen from '@src/modules/noConnection/ui';
import { NewTodoForm } from '@src/modules/home/ui/components/new-todo-form';
import { TodoList } from '@src/modules/home/ui/components/todo-list';
import Footer from '@src/modules/home/ui/components/footer';
import Header from '@src/modules/home/ui/components/header';
import PhotosList from '@src/modules/home/ui/components/photos-list';

export default function HomeScreen() {
  console.log('Home');

  const dispatch = useAppDispatch();
  const netInfo = useNetInfo();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const [Todos, setTodos] = useState<string[]>([]);
  const addTodo = (todo: string) => setTodos(todos => [...todos, todo]);

  if (netInfo.isConnected !== true) {
    return <NoConnectionScreen />;
  } else {
    return (
      <S.Main>
        <Header />
        <NewTodoForm addTodo={addTodo} />
        <TodoList Todos={Todos} />
        <PhotosList />
        <Footer />
      </S.Main>
    );
  }
}
