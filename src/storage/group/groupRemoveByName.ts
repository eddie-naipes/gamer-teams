import AsyncStorage from '@react-native-async-storage/async-storage';
import {GROUP_COLLECTION, PLAYER_COLLECTION} from "@storage/storageConfig";
import {getAllGroup} from "@storage/group/GroupsGetAll";

export async function removeGroupByName(groupName: string) {
    try {
        const groups = await getAllGroup();

        const newGroups = groups.filter(group => group !== groupName);

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));

        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
    }catch (error) {
        throw error;
    }
}