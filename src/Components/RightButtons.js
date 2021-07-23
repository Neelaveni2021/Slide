import React from 'react'
import styled from 'styled-components';

const theme ={

    blue: {
        default: '#fdd85d',
        hover: '#ffe97f'
    },

    pink: {
        default: '#fdd85d',
        hover: '#ffe97f'

    }
}

const Button = styled.button`
background-color: ${props => theme[props.theme].default};
color: #fffdf7;
padding: 15px 25px;
border-radius: 10px;
outline: 0px;
margin: 15px 1000px;
cursor: pointer;

transition: ease background 250ms;
&:hover {
    background-color: ${props => theme[props.theme].hover};
}
`

Button.defaultProps ={
    theme: 'blue'

}
function clickMe(){
    alert('please wait ,the page is under progress');
}

function RightButton() {
    return (
        <>
        <div>
            <Button onClick={clickMe}>
                Enhanced Customer Experience
            </Button>
        </div>
        <div>
        <Button theme="pink" onClick={clickMe}>
            Reduce Time to Sale
        </Button>
    </div>
    <div>
        <Button theme="pink" onClick={clickMe}>
            Sales and Delivery Alignment
        </Button>
    </div>
    <div>
        <Button theme="pink" onClick={clickMe}>
            Eliminate Revenue Leakage
        </Button>
    </div>
    </>
    )
}

export default RightButton
