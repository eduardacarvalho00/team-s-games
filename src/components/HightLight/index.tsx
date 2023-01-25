import { Container, SubTitle, Title } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

export function Hightlight({ title, subtitle } : Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
