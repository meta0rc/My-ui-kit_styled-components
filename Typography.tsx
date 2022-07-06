import styled, { css } from "styled-components";
import { Theme } from "../../theme";

export type TextProps = {
    color?: keyof typeof Theme.colors
    size?: keyof typeof Theme.sizes
    weight?: 300 | 400 | 700
    level?: 1 | 2 | 3 | 4 | 5 | 6
}
export const Body = styled('p').attrs<TextProps>(() => ({as: 'p'}))<TextProps>`
   ${({
        color = 'light',
        size = 'small',
        weight = 300
   }) => css`
        font-size: ${Theme.sizes[size]};
        color: ${Theme.colors[color]};
        font-weight: ${weight};
   `}
`
export const Heading = styled('h1').attrs<TextProps>(({ level }) => ({as: `h${level}`}))<TextProps>`
    ${({
      color = 'light',
      size = 'xlarge',
      weight = 700
    }) => css`
      font-size: ${Theme.sizes[size]};
      color: ${Theme.colors[color]};
      font-weight: ${weight};
    `}
  `
