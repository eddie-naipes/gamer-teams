import AsyncStorage from "@react-native-async-storage/async-storage";
import {PlayerStorageDTO} from "@storage/player/PlayerStorageDTO";
import {PLAYER_COLLECTION} from "@storage/storageConfig";

export async function playersGetByGroup(group: string): Promise<PlayerStorageDTO[]> {
    return await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`).then((value) => {
        if (!value) {
            return []
        }
        return JSON.parse(value)
    })
}
