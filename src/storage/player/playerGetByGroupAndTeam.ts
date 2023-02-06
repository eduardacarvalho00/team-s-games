import { playersGetByGroup } from '@storage/player/playersGetByGroup';

export async function playerGetByGroupAndTeam(group: string, team: string) {
  const storage = await playersGetByGroup(group);
  const players = storage.filter((player) => player.team === team);
  
  return players;
}
