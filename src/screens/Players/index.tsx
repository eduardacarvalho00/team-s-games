/* eslint-disable no-unused-vars */
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { PlayerCard } from '@components/PlayerCard';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container, Form, HeaderList, NumbersOfPlayers, 
} from './styles';

interface RouteParams{
  group: string
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Duda', 'Mirela']);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />
      <Hightlight
        title={group}
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

      <FlatList 
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
