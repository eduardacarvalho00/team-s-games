/* eslint-disable react/jsx-no-bind */
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const { navigate } = useNavigation();
  function handlePagePlayers() {
    navigate('players', { group: 'teste' });
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Hightlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />
        <Input 
          placeholder="Nome da turma"
        />
        <Button title="criar" style={{ marginTop: 20 }} onPress={handlePagePlayers} />
      </Content>
      
    </Container>
  );
}
