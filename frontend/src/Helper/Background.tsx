import styled from "styled-components";
import smartphone from "../Assets/images/smartphone.png";
export default function Background() {
  return (
    <Section>
      <Logo>
        <div className="text">
          <h1>NG.CA$H</h1>
          <h2>A CARTEIRA DA NOVA GERAÇÃO.</h2>
        </div>
        <img src={smartphone} alt="" />
      </Logo>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: #000;

  @media (max-width: 1220px) {
    display: flex;
    justify-content: center;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  margin-left: 100px;
  margin-top: 10vh;
  width: calc(100vw - 700px);
  max-width: 1200px;
  .text {
    color: #fff;
    h1 {
      font-family: "Urbanist", sans-serif;
      font-size: 6rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  img {
    max-width: 600px;
    align-self: flex-end;
    margin-right: 120px;
  }
  @media (max-width: 1220px) {
    width: fit-content;
    margin: 0;
    align-items: center;
    margin-top: 5vh;
    img {
      display: none;
    }
  }
  @media (max-width: 420px) {
    .text {
      h1 {
        font-family: "Urbanist", sans-serif;
        font-size: 4rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
