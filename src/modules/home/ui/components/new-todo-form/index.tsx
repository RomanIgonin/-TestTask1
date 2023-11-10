import { TextInput } from 'react-native';
import UDButton from '@src/modules/ud-ui/button';
import { memo, useState } from 'react';

export const NewTodoForm = memo(({ addTodo }) => {
  console.log('NewTodoForm');

  const [newTodo, setNewTodo] = useState('');

  const add = () => {
    addTodo(newTodo);
  };

  return (
    <>
      <TextInput
        style={{ borderWidth: 1, height: 40 }}
        onChangeText={setNewTodo}
      />
      <UDButton label={'Add'} onPress={add} />
    </>
  );
});
