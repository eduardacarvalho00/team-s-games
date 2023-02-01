import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Input } from '@components/Input';
import { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container, Form, HeaderList, NumbersOfPlayers, 
} from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

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
      <HeaderList>
        <FlatList 
          data={['time a', 'time b']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team} 
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      
    </Container>
  );
}
