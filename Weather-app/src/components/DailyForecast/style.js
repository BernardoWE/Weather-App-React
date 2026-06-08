import styled from "styled-components"
import { Colors } from "../../pages/home/style"
export const DailyForecast = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.blue800};
    border-radius: 10px;
    padding: 1rem;
    /* margin: 0.5rem; */
    color: ${Colors.blue0};
    flex: 1;
    min-width: 100px;
    /* min-height: 200px; */
    flex-wrap: wrap;
    /* height: 144px; */
    .daily-div-temperature{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    img{
        width: 70px;
    }
`