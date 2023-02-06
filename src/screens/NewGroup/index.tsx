/* eslint-disable react/jsx-no-bind */
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const { navigate } = useNavigation();

  async function handlePagePlayers() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma');
      }

      await groupCreate(group);
      navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo ');
        console.log(error);
      }
    }
    return null;
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Hightlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />
        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button title="criar" style={{ marginTop: 20 }} onPress={handlePagePlayers} />
      </Content>
      
    </Container>
  );
}
