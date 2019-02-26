import React from "react";
import ReactDOM from 'react-dom';
import ajax from '../lib/ajax';
import MenuList from './MenuList.jsx';
// import styled from 'styled-components';
const { styled } = window;

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuBoard: [],
      buttonClick: ""
    }
    this.updateMenu = this.updateMenu.bind(this);
  }

  componentDidMount() {
    this.updateMenu();
  }

  updateMenu(event) {
    let temp = event === undefined ? 'lunch' : event.target.value;
    let meal = temp;
    ajax.renderMenu(meal, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      this.setState({
        menuBoard: data,
        changeBorder: temp
      })
    });
  }

  render() {
    return (
      <Container>
        <Text>Menu</Text>
        <ButtonLine>
          <TopButton1 type='button' borderChanged={this.state.changeBorder} value='lunch' onClick={this.updateMenu}>Lunch</TopButton1>
          <TopButton2 type='button' borderChanged={this.state.changeBorder} value='dinner' onClick={this.updateMenu}>Dinner</TopButton2>
          <TopButton3 type='button' borderChanged={this.state.changeBorder} value='dessert' onClick={this.updateMenu}>Dessert</TopButton3>
        </ButtonLine>
        <NextLine /><NextLine />

        <MenuList lists={this.state.menuBoard} />
        <NextLine />

      </Container>
    );
  }
}

export default Menu;

//Set up styled-component
const Container = styled.div`
  max-width: 620px;
  overflow: hidden;
`;

const NextLine = styled.br``;

const Text = styled.p`
    font-size: 1.2em;
    font-family: Quicksand;
    font-weight: bolder;  
  `;

const ButtonLine = styled.div`
    border-top: 1px solid #d8d9db;
    padding-top: 10px;
    padding-bottom: 10px;
    width:900px;
    border-bottom: 1px solid #d8d9db;
  `;

const TopButton1 = styled.button`

    cursor: pointer;
    background-color: white;
    border: ${(props) => props.borderChanged === 'lunch' ? '2px solid #DA3743' : '1px solid #d8d9db'};
    font-size: smaller;
    font-family: Quicksand;
    font-weight: bolder;
    padding: 8px;
    width: 100px;
    margin: 10px;
    outline : none;
  `;

const TopButton2 = styled.button`
  cursor: pointer;
  background-color: white;
  border: ${(props) => props.borderChanged === 'dinner' ? '2px solid #DA3743' : '1px solid #d8d9db'};
  font-size: smaller;
  font-family: Quicksand;
  font-weight: bolder;
  padding: 8px;
  width: 100px;
  margin: 10px;
  outline : none;
`;

const TopButton3 = styled.button`
    cursor: pointer;
    background-color: white;
    border: ${(props) => props.borderChanged === 'dessert' ? '2px solid #DA3743' : '1px solid #d8d9db'};
    font-size: smaller;
    font-family: Quicksand;
    font-weight: bolder;
    padding: 8px;
    width: 100px;
    margin: 10px;
    outline : none;
  `;

const ItemLine = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d8d9db;
  `;