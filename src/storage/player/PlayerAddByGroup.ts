import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppError} from "@utils/AppError";
import {PLAYER_COLLECTION} from "@storage/storageConfig";
import {PlayerStorageDTO} from "@storage/player/PlayerStorageDTO";
import {playersGetByGroup} from "@storage/player/playersGetByGroup";
import {Alert} from "react-native";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
        try {
            const storaredPlayers = await playersGetByGroup(group)
            const playerAlreadyExist = storaredPlayers.filter(player => player.name === newPlayer.name)
            if (playerAlreadyExist.length > 0) {
                Alert.alert("Player", "Jogador já existe")
               throw new AppError("Player already exist")
            }
            const storage = JSON.stringify([...storaredPlayers, newPlayer])
            await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
        }catch(error){

        }

}