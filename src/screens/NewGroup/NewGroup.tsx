import {Container, Content, Icon} from "./style"
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {Button} from "@components/Button/Button";
import {Input} from "@components/Input/Input";

export const NewGroup = () => {
    return (
        <Container>
            <Header
                showBackButton
            />
            <Content>
                <Icon/>
                <HighLight
                    title={"Nova Turma"}
                    subtitle={"Crie a turma para adicionar as pessoas"}
                />
                <Input
                    placeholder={"Nome da turma"}
                />
                <Button
                    title={"Criar"}
                />
            </Content>
        </Container>
    );
};