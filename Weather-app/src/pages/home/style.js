import styled from 'styled-components'
import todayBg from '../../assets/images/bg-today-large.svg'
export const Colors = {
    blue900:'hsl(243, 96%, 9%)',
    blue800:'hsl(243, 27%, 20%)',
    blue700:'hsl(243, 23%, 24%)',
    blue600:'hsl(243, 23%, 30%)',
    blue300:'hsl(240, 6%, 70%)',
    blue200:'hsl(250, 6%, 84%)',
    blue0:'hsl(0, 0%, 100%)',
    lightBlue:'hsl(233, 67%, 56%)',
    lightBlue700:'hsl(248, 70%, 36%)',
}
export const Main = styled.main`
    padding: 2rem 5rem;
    min-height: 100vh ;
    h1{
        color: ${Colors.blue0};
        margin: 0 auto;
        width: fit-content;
        font-size: 3rem;
    }
    
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`
export const DropdownContainer = styled.div`
    position: relative;
    z-index: 2;
   
`
export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${Colors.blue800};
    border-radius: 10px;
    padding: .5rem;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-top: .3rem;
     h3{
        color: ${Colors.blue200};
        font-weight: 100;
        font-size: .8rem;
        opacity: .7;
        margin-left: .5rem;
    }
    li{
        list-style: none;
        margin-top: 0.5rem;
    }
    
    `
export const ButtonUnits = styled.button`
    display: flex;
    background-color: ${Colors.blue800};
    border: none;
    border-radius: 8px;
    padding: .7rem;
    gap: .9em;
    /* width: 100%; */
    color: ${Colors.blue0};
    cursor: pointer;
    &:hover{
        background-color: ${Colors.blue700};
        
    }
    span{
        display: flex;
        gap: .7em;
    }
`
export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    background-color:  ${props => props.$isActive ? Colors.blue700 : 'transparent'};
    border: none;
    width: 100%;
    color: ${Colors.blue0};
    border-radius: 8px;
    padding: .5rem;
    cursor: pointer ;
    &:hover{
        background-color: ${Colors.blue700};
    }
    &:focus{
        ${props => props.$isActive ? `1px solid #fff` : `none`};
    }
    
`
export const SearchContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
`
export const SearchInputWrapper = styled.label`
    display: flex;
    align-items: center;
    background-color: ${Colors.blue800};
    border-radius: 10px;
    padding: 1rem;
    gap:0.5rem;
    cursor: text;
    flex-shrink: 0;
    width: clamp(200px, 50vw, 500px);
    /* width: 500px; */
    &:hover{
        background-color: ${Colors.blue700};
    }
`
export const SearchInput = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    outline:none;
    color: ${Colors.blue0};
    &::placeholder{
        color: ${Colors.blue300};
    }
    
`
export const SearchButton = styled.button`
    background-color: ${Colors.lightBlue};
    border: none;
    border-radius: 10px;
    color: ${Colors.blue0};
    padding: .8rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: ${Colors.lightBlue700};
        
    }
    &:active{
        transform: scale(0.
            98);
    }
`
export const WeatherInfoContainer = styled.div`
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    grid-area: 3 / 1 / 4 / 4;
`
export const DailyForecastContainer = styled.div`
    display: flex;
    gap:1em;
    flex-wrap: wrap;
    grid-area: 4 / 1 / 6 / 4;
`
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
    .daily-div-temperature{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    img{
        width: 70px;
    }
`

export const TodayWeather = styled.div`
    background-image: url(${todayBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    grid-area: 1 / 1 / 3 / 4;
    height: 280px;
    border-radius: 20px;
`

export const WeatherGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    gap: 30px;
    margin-top: 2rem;
`

export const HourlyForecastContainer = styled.div`
    grid-area: 1 / 4 / 6 / 6;
    background-color: ${Colors.blue800};
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    .hourly-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            
        font-size: 1.2em;
        color: #fff;
    
        }
    }
`
export const HourlyForecast = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.blue700};
    border-radius: 10px;
    margin: 5px 0;
    padding-inline: .5em;
    color: ${Colors.blue0};
    flex: 1;
    div{
        display: flex;
        align-items: center;
    }
     img{
        width: 50px;
    }
    
    
`
export const ButtonDays = styled.button`
display: flex;
    background-color: ${Colors.blue600};
    border: none;
    border-radius: 10px;
    padding: .5rem 1em;
    gap: .9em;
    /* width: 100%; */
    color: ${Colors.blue0};
    cursor: pointer;
    &:hover{
        background-color: ${Colors.blue700};
        
    }
    span{
        display: flex;
        gap: .7em;
    }
`
export const DropdownDaysMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 1rem;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 10px;
    z-index: 999;
    background-color: ${Colors.blue800};
   /* border: 1px solid ${Colors.blue0}; */
    border-radius: 10px;
   -webkit-box-shadow: 0px 0px 15px -4px #000000; 
    box-shadow: 0px 0px 15px -4px #000000;

   ul{
    list-style: none;
   }
   li{
    margin: 5px 0;
   }
`
