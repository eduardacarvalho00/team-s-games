import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header showBackButton={false} />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do ignite" />
    </Container>
  );
}
