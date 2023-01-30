import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

interface Props extends TouchableOpacityProps{
  nameIcon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ nameIcon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={nameIcon} type={type} />
    </Container>
  );
}
