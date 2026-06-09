import {createGlobalStyle} from "styled-components"
import { Colors } from "../pages/home/style.js"
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
  }
  body{
    background-color: ${Colors.blue900};
  }
`