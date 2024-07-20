import {Container, Content, Icon} from "./style"
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {Button} from "@components/Button/Button";
import {Input} from "@components/Input/Input";
import {useNavigation} from "@react-navigation/native"
import {useState} from "react";

export const NewGroup = () => {

    const navigation = useNavigation();
    const [groupName, setGroupName] = useState<string>("");

    const handleCreatePlayer = () => {
        navigation.navigate("player", {group: groupName})
    }

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
                    onChangeText={setGroupName}
                    value={groupName}
                />
                <Button
                    title={"Criar"}
                    onPress={handleCreatePlayer}
                />
            </Content>
        </Container>
    );
};