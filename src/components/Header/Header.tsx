import {BackButton, BackIcon, Container} from "./styles";
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
            <ShieldPlus/>
        </Container>
    );
};