import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Hightlight title="Nova turma" subtitle="crie a turma paa adicionar as pessoas" />
        <Button title="criar" />
      </Content>
      
    </Container>
  );
}
