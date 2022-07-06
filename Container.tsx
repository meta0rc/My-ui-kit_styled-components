import { ButtonHTMLAttributes, HTMLAttributes, HtmlHTMLAttributes } from "react"
import styled from "styled-components"

interface DivType extends HTMLAttributes<HTMLDivElement> {

    padding?: string
    row?: boolean
    flex?: boolean
    mode?: 'dark' | 'light'
    background?: string
    children?: any
    h?: string
    w?: string
    align?: 'center' | 'left' | 'right'
    popup?: boolean
    banner?: boolean
    position?: 'relative' | 'absolute'
    
}

export const Box = styled.div<DivType>` 
    position: ${props => props.position};
    width: ${props => props.w ? props.w : '100%'};
    height: ${props=> props.h ? props.h+'!important' : '100%'};
    padding: ${props => props.padding};
    background: ${props => props.background ? props.background : ''};
    display: ${props=> props.flex ? 'flex' : ''};
    text-align: ${props => props.align};
    ${props => props.popup ? props.theme.popup.full : ''};
    ${props => props.banner ? props.theme.banner : ''}


    ${props => props.row ? `
        flex-direction: row;
        @media (max-width: 768px){
            flex-wrap: wrap;
        }
    ` : ''};

    ${props => props.mode === 'dark' ? props.theme.mode.dark : ''};
    ${props => props.mode === 'light' ? props.theme.mode.light : ''};
    `

export const Container = (props: DivType) => {
    const { children, ...rest } = props
    return (
        <Box {...rest}>
            { children }
           
        </Box>
    )
}