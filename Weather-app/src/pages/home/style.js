import styled from 'styled-components'
export const Colors = {
    blue900:'hsl(243, 96%, 9%)',
    blue800:'hsl(243, 27%, 20%)',
    blue700:'hsl(243, 23%, 24%)',
    blue600:'hsl(243, 23%, 30%)',
    blue300:'hsl(240, 6%, 70%)',
    blue200:'hsl(250, 6%, 84%)',
    blue0:'hsl(0, 0%, 100%)',
}
export const Main = styled.main`
    padding: 3rem 5rem;
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
    gap: .7em;
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
`
export const SearchInputWrapper = styled.label`
    display: flex;
    align-items: center;
    background-color: ${Colors.blue800};
    border-radius: 8px;
    padding: .8rem;
    gap:0.5rem;
    cursor: text;
    
    /* width: clamp(200px, 20vw, 400px); */
    width: 400px;
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