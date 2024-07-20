import {BackButton, BackIcon, Container, Logo} from "./styles";
import {useNavigation} from "@react-navigation/native"

type Props = {
    showBackButton?: boolean;
}


export const Header = ({showBackButton = false}:Props) => {

    const navigate = useNavigation();

    const handleGoHome = () => {
        navigate.navigate("groups");
    }

    return (
        <Container>
            { showBackButton &&
                <BackButton
                    onPress={handleGoHome}
                >
                <BackIcon/>
            </BackButton>
            }
            <Logo/>
        </Container>
    );
};