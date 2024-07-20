import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Groups} from "@screens/Groups/Groups";
import {Player} from "@screens/Player/Player";
import {NewGroup} from "@screens/NewGroup/NewGroup";
const {Navigator, Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name={"groups"}
                component={Groups}
            />
            <Screen
                name={"new"}
                component={NewGroup}
            />
            <Screen
                name={"player"}
                component={Player}
            />
        </Navigator>
    )
}