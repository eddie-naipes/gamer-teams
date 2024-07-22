import {Container, Form, HeaderList, NumbersOfPlayers} from "./styles"
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {ButtonIcon} from "@components/ButtonIcon/ButtonIcon";
import {Input} from "@components/Input/Input";
import {Filter} from "@components/Filter/Filter";
import {Alert, FlatList} from "react-native";
import {useState} from "react";
import {PlayerCard} from "@components/PlayerCard/PlayerCard";
import {ListEmpty} from "@components/ListEmpty/ListEmpty";
import {Button} from "@components/Button/Button";
import {useRoute} from "@react-navigation/native";
import {playerAddByGroup} from "@storage/player/PlayerAddByGroup";
import {playersGetByGroup} from "@storage/player/playersGetByGroup";
import {playersGetByGroupAndTeam} from "@storage/player/playersGetByGroupAndTeam";
import {PlayerStorageDTO} from "@storage/player/PlayerStorageDTO";


type RouteParams = {
    group: string
}

export const Player = () => {

    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute()
    const {group} = route.params as RouteParams
    const [newPlayerName, setNewPlayerName] = useState('')


    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert("Player", "Nome do jogador não pode ser vazio")
        }
        const newPlayer = {
            name: newPlayerName,
            team
        }

        try {
            await playerAddByGroup(newPlayer, group)
            const players = await playersGetByGroup(group)
        } catch (error) {
            Alert.alert("Player", "Erro ao adicionar jogador")
        }

    }

    async function loadPlayersByTeam() {
        const playersByTeam = await playersGetByGroupAndTeam(group, team)
        setPlayers(playersByTeam)
    }

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
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                />
                <ButtonIcon icon={"add"} onPress={handleAddPlayer}/>
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
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
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item.name}
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