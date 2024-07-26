import {Container, Form, HeaderList, NumbersOfPlayers} from "./styles"
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {ButtonIcon} from "@components/ButtonIcon/ButtonIcon";
import {Input} from "@components/Input/Input";
import {Filter} from "@components/Filter/Filter";
import {Alert, FlatList, TextInput} from "react-native";
import {useEffect, useState, useRef} from "react";
import {PlayerCard} from "@components/PlayerCard/PlayerCard";
import {ListEmpty} from "@components/ListEmpty/ListEmpty";
import {Button} from "@components/Button/Button";
import {useRoute} from "@react-navigation/native";
import {playerAddByGroup} from "@storage/player/PlayerAddByGroup";
import {playersGetByGroupAndTeam} from "@storage/player/playersGetByGroupAndTeam";
import {PlayerStorageDTO} from "@storage/player/PlayerStorageDTO";
import {playerRemovedByGroups} from "@storage/player/playerRemovedByGroups";
import {removeGroupByName} from "@storage/group/groupRemoveByName";
import {useNavigation} from "@react-navigation/native";


type RouteParams = {
    group: string
}

export const Player = () => {

    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute()
    const {group} = route.params as RouteParams
    const [newPlayerName, setNewPlayerName] = useState('')
    const newPlayerNameInputRef = useRef<TextInput>(null)
    const navigation = useNavigation()


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
            loadPlayersByTeam().then(r => r)
            setNewPlayerName('')
            newPlayerNameInputRef.current?.blur()
        } catch (error) {
            Alert.alert("Player", "Erro ao adicionar jogador")
        }

    }

    async function loadPlayersByTeam() {
        const playersByTeam = await playersGetByGroupAndTeam(group, team)
        setPlayers(playersByTeam)
    }


        async function handleRemovePlayer(playerName: string) {
            await playerRemovedByGroups(group, playerName)
            loadPlayersByTeam().then(r => r)
    }

    async function handleRemoveGroup() {
        Alert.alert("Player", "Deseja realmente remover o grupo?", [
            {
                text: "Não",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: async () => {
                    await removeGroupByName(group)
                    navigation.navigate("groups")
                }
            }
        ])

    }

    useEffect(() => {
        loadPlayersByTeam().then(r => r)
    }, [team])
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
                    inputRef={newPlayerNameInputRef}
                    placeholder={"Digite o nome da pessoa"}
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType={"done"}
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
                        onRemove={() => handleRemovePlayer(item.name)}
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

            <Button
                title={"Remover Turma"}
                type={"SECONDARY"}
                onPress={handleRemoveGroup}
            />
        </Container>
    );
};