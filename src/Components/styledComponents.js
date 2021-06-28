import styled from 'styled-components'

export const Head = styled.div`
display:flex;
background-color: ill-informed-hand.surge.sh
;
height:20vh;
justify-content:space-around;
align-items:center;
img{
    height:5vh;
}`

export const FormResearch = styled.div`
display:flex;
flex-direction:column;
height:20vh;
justify-content:space-around;
align-items:center;

input{
    height:5vh;
    width: 80vw;
}
img{
    height:5vh;
}
button{
    background-color:transparent;
    border: none;
&:hover{
transform: scale(1.1);
    }
}`

export const Container = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
justify-content:center;
width:100vh;
`

export const CardProfile = styled.div`
display: grid;
box-shadow: 5px 2px 5px;
padding:2%;
margin:auto;
border-radius: 20px;
width:20%;
min-width: 250px;
height:auto;
max-height: 70vh;
img{
 border-radius: 20px;
    width:100%;
}
p{
    display:flex;
    justify-content:center;
    border: 1px solid black;
    border-radius: 20px;
    padding:2%;
}
button{
    background-color:#BD7A4B;
    border-radius: 20px;
    margin:2%;
    &:hover{
        transform:scale(1.2);
        background-color:black;
        color:white;
    }
}
`
export const CardRepo = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
align-items:center;
margin:2%;
padding:2%;
border-radius: 20px;
box-shadow: 2px 5px 2px;

`
