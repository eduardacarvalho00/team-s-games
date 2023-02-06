import AsyncStorage from '@react-native-async-storage/async-storage';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { PLAYER_COLLECTION } from '@storage/storageConfig';

export async function playerRemoveByGroup(playerName: string, group: string) {
  const storage = await playersGetByGroup(group);

  const filteredByName = storage.filter((player) => player.name !== playerName);
  const players = JSON.stringify(filteredByName);

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
}
