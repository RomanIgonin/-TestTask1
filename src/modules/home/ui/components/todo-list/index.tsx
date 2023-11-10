import { FlatList, Text } from 'react-native';

export const TodoList = ({ Todos }) => {
  console.log('TodoList');

  const renderItem = ({ item }: string) => {
    return <Text>{item}</Text>;
  };

  return <FlatList data={Todos} renderItem={renderItem} />;
};
