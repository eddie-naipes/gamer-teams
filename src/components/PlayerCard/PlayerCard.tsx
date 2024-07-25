import {Container, Name, Icon} from "./styles"
import {ButtonIcon} from "@components/ButtonIcon/ButtonIcon";


type Props = {
    name: string;
    onRemove: () => void;
}

export const PlayerCard = ({name}: Props) => {
    return (
        <Container>
            <Icon name="person"/>
            <Name>{name}</Name>
            <ButtonIcon icon={"close"} type={"SECONDARY"}/>
        </Container>
    );
};