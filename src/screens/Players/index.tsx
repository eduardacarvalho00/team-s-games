/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { PlayerCard } from '@components/PlayerCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { AppError } from '@utils/AppError';
import { useState, useEffect, useRef } from 'react';
import {
  Alert, FlatList, Keyboard, TextInput, 
} from 'react-native';
import {
  Container, Form, HeaderList, NumbersOfPlayers, 
} from './styles';

interface RouteParams{
  group: string
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('TIME A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { navigate } = useNavigation();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova Pessoa', 'Informe o nome do jogador para adicionar.');
    }
    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName('');
      fetchPlayerByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        Alert.alert('Nova pessoa', 'Não foi possivel adicionar');
      }
    }
    return null;
  }

  async function fetchPlayerByTeam() {
    try {
      setIsLoading(true);

      const playerByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playerByTeam);
    } catch (error) {
      Alert.alert('Nova pessoa', 'Não foi possivel carregar as pessoas do time selecionado');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayerByTeam();
    } catch (error) {
      Alert.alert('Remover Pessoa', 'Não foi possivel removar essa pessoa');
      console.log(error);
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigate('groups');
    } catch (error) {
      Alert.alert('Remover turma', 'Não foi possivel remover a turma, tente novamente mais tarde');
      console.log(error);
    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      'Remover',
      'Deseja remover a turma?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => groupRemove() },
      ],
    );
  }
  
  useEffect(() => {
    fetchPlayerByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Hightlight
        title={group}
        subtitle="Adicione a galera e separe os times" 
      />

      <Form> 
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName} 
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon
          nameIcon="add"
          onPress={handleAddPlayer} 
        />
      </Form>

      <HeaderList>
        
        <FlatList 
          data={['TIME A', 'TIME B']}
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

      {
        isLoading ? <Loading /> 
          : <FlatList 
              data={players}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <PlayerCard name={item.name} onRemove={() => handlePlayerRemove(item.name)} />
              )}
              ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />
      }
      <Button title="Remover Turma" type="SECONDARY" onPress={handleGroupRemove} />
    </Container>
  );
}
