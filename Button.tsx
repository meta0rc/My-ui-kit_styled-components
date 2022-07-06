import styled, { css } from "styled-components"
import { ButtonHTMLAttributes } from "react"
import { Theme } from "../../theme";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    weight?: keyof typeof Theme.weights
    mode?: keyof typeof Theme.mode
    radius?: keyof typeof Theme.radius
    size?: keyof typeof Theme.sizes
    margin?: string
}

const ButtonStyled = styled.button<ButtonProps>`

    width: 120px;
    height: 40px;

    ${({
        size = 'small',
        margin = '10px',
        radius = 'sma',
        weight = 'normal',
        mode = 'dark'
    }) => css`
        margin: ${margin};
        border-radius: ${Theme.radius[radius]};
        font-weight: ${Theme.weights[weight]};
        font-size: ${Theme.sizes[size]};
        ${Theme.mode[mode]};
    `}
;
    
`
export const Button = (props: ButtonProps) => {
    const { children, ...rest } = props
    return (
        <ButtonStyled {...rest}>
            { children }
        </ButtonStyled>
    )
}