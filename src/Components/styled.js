import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  background-color: #58a6e1;
  height: 20vh;
  width: 100%;
  justify-content: space-between;
  padding: 0% 5%;
  align-items: center;

  img {
    height: 5vh;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const FormResearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 15vh;
  min-height: 80px;

  .form {
    display: flex;
    justify-content: space-between;
    padding: 1% 2%;
    align-items: center;
    width: 20vw;
    min-width: 200px;
    background-color: #d3d3d3;
    border-radius: 5px;
    box-shadow: 5px 4px 4px rgba(146, 133, 133, 0.25);
    > input {
      background-color: transparent;
      border: none;
      color: black;
      justify-content: space-between;
      padding: 2%;
    }
    > button {
      background-color: transparent;
      border: none;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 5%;
  width: 100%;
  min-height: 65vh;
  position: relative;
`;

export const InfoContain = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  line-height: 30px;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .buttons-container {
    position: absolute;
    left: 30%;
    > button {
      &:hover {
        border-radius: none;
        background-color: transparent;
        border-bottom: 3px solid #58a6e1;
      }
    }
  }
`;
export const MainContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  padding-top: 5%;
  line-height: 30px;
  gap: 20px;
`;

export const CardRepo = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: auto;
  min-height: 150px;
  justify-content: space-between;
  padding: 2%;
  border: 1px solid rgba(146, 133, 133, 0.5);
  border-radius: 5px;
  box-shadow: 5px 4px 4px rgba(146, 133, 133, 0.25);
  overflow: visible;
`;
