import {Container, Subtitle, Title} from "./styles"

type Props = {
    title: string;
    subtitle: string;
}


export const HighLight = ({subtitle, title}: Props) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    );
};