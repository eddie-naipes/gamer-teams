import { Container } from "@screens/Groups/styles";
import { Header } from "@components/Header/Header";
import { HighLight } from "@components/Heghlight/HighLight";
import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard/GroupCard";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { Button } from "@components/Button/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getAllGroup } from "@storage/group/GroupsGetAll";

export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);
    const navigation = useNavigation();

    const handleNewGroup = () => {
        navigation.navigate("new");
    };

    async function fetchGroups() {
        const groups = await getAllGroup();
        setGroups(groups);
    }

    useFocusEffect(useCallback(() => {
        fetchGroups().then(r => r);
    }, []));

    const handleOpenGroup = (group: string) => {
        navigation.navigate("player", { group: group });
    };

    return (
        <Container>
            <Header />
            <HighLight title={"Turmas"} subtitle={"Jogue com a sua turma"} />
            <FlatList
                keyExtractor={item => item}
                data={groups}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                        onPress={() => handleOpenGroup(item)}
                    />
                )}
                ListEmptyComponent={() => <ListEmpty message={"Que tal cadastrar a primeira turma?"} />}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                showsVerticalScrollIndicator={false}
            />
            <Button
                title={"Criar nova turma"}
                onPress={handleNewGroup}
            />
        </Container>
    );
}
