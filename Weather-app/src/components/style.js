import styled from "styled-components";
import { Colors } from "../pages/home/style.js";
export const Card = styled.div`
    background-color: ${Colors.blue800};
    border-radius: 10px;
    padding: 0.7em;
    /* margin: 0.5rem; */
    color: ${Colors.blue0};
    
    flex: 1;
    p:first-of-type{
        margin-bottom: 1em;
        opacity: .6;
    }
    strong{
        font-size: 1.6em;
        
    }
`;