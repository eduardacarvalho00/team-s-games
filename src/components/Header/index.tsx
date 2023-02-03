/* eslint-disable react/jsx-no-bind */
import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import {
  BackButton, BackIcon, Container, Logo, 
} from './styles';

interface Props {
  showBackButton: boolean;
}

export function Header({ showBackButton = false } : Props) {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate('groups');
  }
  return (
    <Container>
      { showBackButton
        && <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>}
      <Logo source={logoImg} />
    </Container>
  );
}
