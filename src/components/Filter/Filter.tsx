import {Container, FilterStyleProps, Title} from "./style"
import {TouchableOpacityProps} from "react-native";


type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export const Filter = ({title, isActive = false, ...rest}: Props) => {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
};