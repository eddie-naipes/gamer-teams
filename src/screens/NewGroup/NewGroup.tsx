import {Container, Content, Icon} from "./style"
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {Button} from "@components/Button/Button";
import {Input} from "@components/Input/Input";
import {useNavigation} from "@react-navigation/native"
import {useState} from "react";
import {groupCreate} from "@storage/group/GroupCreate";
import {AppError} from "@utils/AppError";
import {Alert} from "react-native";

export const NewGroup = () => {

    const navigation = useNavigation();
    const [groupName, setGroupName] = useState<string>("");

   async function handleCreatePlayer()  {
       try {
           if(groupName.trim().length === 0) {
               return Alert.alert("New Group", "Nome da turma não pode ser vazio")
           }
           await groupCreate(groupName)
           navigation.navigate("player", {group: groupName})
       } catch (error) {
           if (error instanceof AppError) {
               Alert.alert("New Group", error.message)
           } else {
               Alert.alert("New Group", "Erro ao criar nova turma")
           }
       }

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