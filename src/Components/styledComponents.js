import styled from 'styled-components'

export const Head = styled.div`
display:flex;
background-color:#58A6E1;
height:20vh;
justify-content:space-around;
align-items:center;
img{
    height:5vh;
    &:hover{
transform: scale(1.1);
    }
}`

export const FormResearch = styled.div`
display:flex;
flex-direction:column;
height:20vh;
justify-content:space-around;
align-items:center;

input{
   border:1px solid #58A6E1;
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
display:flex;
flex-direction: column;
flex-wrap:wrap;
justify-content:center;
width:100vh;
`

export const CardProfile = styled.div`
display: grid;
justify-content:center;
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
    width:100%;
    border-radius: 10px;
    justify-content:center;
    background-color:#58A6E1;
    color:#FAFAFA;
    border:none;
    margin: 2%;
    font-size:1.5em;
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
