import styled from 'styled-components'

const FooterDiv = styled.footer `
  background: #7B7B7B;
  margin-top: 24px;
  padding: 16px 40px;
  text-align: center;

  #logotipo {
    height: 40px;
  }

  #endereco {
    margin: 12px 0;
  }
  p {
    margin: 6px 0;
  }

  img {
    height: 28px;
  }

`

export default function Footer() {
    return ( <
        FooterDiv >
        <
        img id = "logotipo"
        src = "/img/frexco.png"
        alt = "logo" / >

        <
        p id = "endereco" > R.Chico Mendes < /p> <
        p > 11 964344882 < /p> <
        p >
        <
        a href = "https://github.com/WeslleyWashington" >
        <
        img src = "/img/github.png"
        alt = "logo-github" / >
        <
        /a>  <
        a href = "https://www.linkedin.com/in/weslley-washington/" >
        <
        img src = "/img/linkedin.png"
        alt = "logo-github" / >
        <
        /a></p >
        <
        /FooterDiv>
    );
}