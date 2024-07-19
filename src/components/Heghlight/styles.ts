import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`

export const Title = styled.Text`

    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        text-align: center;
    `}
`


export const Subtitle = styled.Text`
    
    ${({theme}) => css`
        text-align: center;
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `}
`