import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Hightlight } from '@components/HightLight';
import { Input } from '@components/Input';
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
     
    </Container>
  );
}
