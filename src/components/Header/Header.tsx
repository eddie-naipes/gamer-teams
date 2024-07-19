import {BackButton, BackIcon, Container, Logo} from "./styles";
import {ShieldPlus} from "phosphor-react-native";

type Props = {
    showBackButton?: boolean;
}


export const Header = ({showBackButton = false}:Props) => {
    return (
        <Container>
            { showBackButton &&
                <BackButton>
                <BackIcon/>
            </BackButton>
            }
            <Logo/>
        </Container>
    );
};