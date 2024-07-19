import {Container} from "@screens/Groups/styles";
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {useState} from "react";
import {FlatList} from "react-native"
import {GroupCard} from "@components/GroupCard/GroupCard";
import {ListEmpty} from "@components/ListEmpty/ListEmpty";
import {Button} from "@components/Button/Button"

export  function Groups() {

    const [groups, setGroups] = useState<string[]>([]);

    return (
        <Container>
            <Header/>
            <HighLight title={"Turmas"} subtitle={"Jogue com a sua turma"} />
            <FlatList
                keyExtractor={item => item}
                data={groups}
                renderItem={({item}) => (
                    <GroupCard
                        title={item}
                    />
                )}
                ListEmptyComponent={() => <ListEmpty message={"Que tal cadastrar a primeira turma?"}/>}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                showsVerticalScrollIndicator={false}
            />

            <Button
                title={"Criar nova turma"}
            />
        </Container>
    );
}