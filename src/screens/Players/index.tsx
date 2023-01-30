import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Container } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Hightlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />
      <ButtonIcon />
    </Container>
  );
}
