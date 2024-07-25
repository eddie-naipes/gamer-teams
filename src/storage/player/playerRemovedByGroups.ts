import AsyncStorage from "@react-native-async-storage/async-storage";

import {PLAYER_COLLECTION} from "@storage/storageConfig";
import { playersGetByGroup} from "@storage/player/playersGetByGroup";

export async function playerRemovedByGroups(group: string, playerName: string) {
    try {
        const storaredPlayers = await playersGetByGroup(group)
        const newPlayers = storaredPlayers.filter(player => player.name !== playerName)
        const storage = JSON.stringify(newPlayers)
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    }catch(error){

    }

}