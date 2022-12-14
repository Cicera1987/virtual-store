import styled from "styled-components"

export const StyleForm = styled.form`
    max-width: 40%;
    margin: 0 auto;
    margin-top: 5px;
`
export const TitleTask = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:1.3em;
    margin-top: 1em;
    height:20px;
    width: 100%;
`
export const ModalTask = styled.div`
    display:flex;
    flex-direction: column;
    border: solid 0.3px grey;
    border-radius: 15px;
    width: 45%;
    max-width: 500px;
    text-overflow: ellipsis;
`
export const ContainerSelect = styled.select`
    display: flex;
    justify-content: flex-end;
    border-radius: 10px;
    width: 50%;
    align-items: center;
    padding: 0.5em 0em 0.5em 1em;
    margin-top: 1em;
    margin-bottom: 1em
`
export const OptionTask = styled.option`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size:1.3em;
    margin-top: 1em;
    height:20px;
    width: 100%;
`
export const TitleLabelspan = styled.span`
    font-size: 1.5em;
    margin-bottom: 0.3em;
    font-weight: bold;
    text-align: left;
`
export const TitleLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`
export const StyleInput = styled.input`
  height: 35px;
  padding: 0 20px;
  font-size: 15px;
  border: 1px solid #ccc;
  min-width: 80px

`
export const ContaineItemLi = styled.li`
    box-shadow: 2px 2px 4px black;
    overflow: hiden;
    height: 550px;
    width: 380px;
    display: grid;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 5px;
`
