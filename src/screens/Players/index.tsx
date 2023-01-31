import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import { Container, Form } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times" 
      />

      <Form> 
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon nameIcon="add" />
      </Form>

      <FlatList 
        data={['time a', 'time b']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Filter title={item} />
        )}
        horizontal
      />
     
    </Container>
  );
}
