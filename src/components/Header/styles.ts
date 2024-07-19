import styled from 'styled-components/native';
import {CaretLeft, GameController} from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const Logo = styled(GameController).attrs(({theme}) => ({
    size: 55,
    color: theme.COLORS.GREEN_700
}))``

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.WHITE
}))``