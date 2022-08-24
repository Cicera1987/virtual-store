import styled from "styled-components";

export const UniversalFooter = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  background-color:#F0FFF0;
`

export const FooterIcon = styled.div`
    display: flex;
    justify-content: flex start;
    flex-direction:column;

svg {
    font-size: 1.5em;
    cursor: pointer;
    margin-left: 0.5em;
    margin: 0.3em 0em 0em 1em;
}
`
export const ModalTitle = styled.p`
font-size: 1em;
margin: 0.7em;
text-align: center;
`