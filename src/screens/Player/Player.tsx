import {Container, Form, HeaderList, NumbersOfPlayers} from "./styles"
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {ButtonIcon} from "@components/ButtonIcon/ButtonIcon";
import {Input} from "@components/Input/Input";
import {Filter} from "@components/Filter/Filter";
import {FlatList} from "react-native";
import {useState} from "react";
import {PlayerCard} from "@components/PlayerCard/PlayerCard";
import {ListEmpty} from "@components/ListEmpty/ListEmpty";
import {Button} from "@components/Button/Button";
import {useRoute} from "@react-navigation/native";


type RouteParams = {
    group: string
}

export const Player = () => {

    const [teams, setTeams] = useState('Time A');
    const [players, setPlayers] = useState([]);
    const route = useRoute()
    const {group} = route.params as RouteParams

    return (
        <Container>
            <Header
                showBackButton
            />
            <HighLight
                title={group}
                subtitle={"Adicione a Galera e separe os times"}
            />
            <Form>
                <Input
                    placeholder={"Digite o nome da pessoa"}
                    autoCorrect={false}
                />
                <ButtonIcon icon={"add"}/>
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <Filter
                            title={item}
                            isActive={item === teams}
                            onPress={() => setTeams(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {}}
                    />
                )}
                ListEmptyComponent={ () => (
                    <ListEmpty message={"Não há jogadores"} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex: 1}
                ]}
            />

            <Button title={"Remover Turma"} type={"SECONDARY"} />
        </Container>
    );
};