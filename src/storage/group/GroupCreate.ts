import AsyncStorage from "@react-native-async-storage/async-storage";
import {GROUP_COLLECTION} from "@storage/storageConfig";
import {getAllGroup} from "@storage/group/GroupsGetAll";
import {AppError} from "@utils/AppError";

export async function groupCreate(groupName: string) {


    const storedGroups = await getAllGroup()
    const groupAlreadyExist = storedGroups.includes(groupName)
    if (groupAlreadyExist) {
        throw new AppError("Group already exist")
    }
    const storage = JSON.stringify([...storedGroups, groupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

}