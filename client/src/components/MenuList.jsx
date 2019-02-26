import React from "react";
import MenuItem from './MenuItem.jsx';
// import styled from 'styled-components';
const { styled } = window;

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      showFullMenu: false,
      clickFullMenu: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
      showFullMenu: !this.state.showFullMenu,
      clickFullMenu: !this.state.clickFullMenu
    })
    document.documentElement.scrollTop = 0;
  }

  render() {
    const arr1 = this.props.lists.slice(0, 20);
    const arr2 = this.props.lists.slice(20, 40);
    const arr3 = this.props.lists.slice(40, 60);
    const arr4 = this.props.lists.slice(60, 80);
    const arr5 = this.props.lists.slice(80, 100);
    const lists = [arr2, arr3, arr4, arr5];
    const imageURL = "https://a.singleplatform.com/OpenTable/fogo-de-chao-15/provided_by_2.png?sp_dt=20190212";

    return (
      <div>

        <TopLevel>
          <MenuItem items={arr1} />
          <ItemLine></ItemLine>
          <Blur showMenu={this.state.showFullMenu}>
            <FullMenuButton type='button' value='full-menu' onClick={this.handleToggle}>View all details</FullMenuButton>
            <LastLine />

            <LastUpdate check={this.state.clickFullMenu}>
              <DateForLastUpdate>Last Updated: Febuary 16, 2019</DateForLastUpdate>
              <Image src={imageURL} />
            </LastUpdate>

          </Blur>
          <Space />

          <MainBox expanded={this.state.isExpanded}>
            {lists.map((list, i) => {
              return (
                <div key={i}>
                  <MenuItem items={list} />
                  <ItemLine />
                  <Space />
                </div>
              );
            })}
          </MainBox>

          <HiddenCollapseButton showButton={this.state.showFullMenu}>
            <ClosingText>Thank you for coming!</ClosingText>
            <CollapseButton onClick={this.handleToggle}>Collapse menu</CollapseButton>
            <BottomLine />
            <LastUpdate check={this.state.clickFullMenu}>
              <DateForLastUpdate>Last Updated: Febuary 16, 2019</DateForLastUpdate>
              <Image src={imageURL} />
            </LastUpdate>

            <Space /><Space />
          </HiddenCollapseButton>
        </TopLevel>

      </div>
    );
  }
}

export default MenuList;

// Set up style-component 

const Space = styled.br``;

const ItemLine = styled.div`

  padding-top: 10px;
  padding-bottom: 10px;
  width:900px;
  border-bottom: 1px solid #d8d9db;
`;

const BottomLine = styled.div`

  padding-top: 30px;
  padding-bottom: 5px; */}
  height:80px;
  width:620px;
  border-bottom: 1px solid #d8d9db;
`;

const TopLevel = styled.div`
  flexBasis: 80%; 
`;

const LastLine = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #d8d9db;
  position: relative;
  top:290px;
  width: 900px;

`;

const LastUpdate = styled.div`
  display:flex;
  position: relative;
  top: ${(props) => props.check ? '' : '300px'}; 
  font-size: xx-small;
  font-family:Quicksand;
  font-weight: bolder;
`;

const DateForLastUpdate = styled.p`
  font-size: xx-small;
  font-family:Quicksand;
  font-weight: bolder; 
`;

const Image = styled.img`
  position: relative;
  left: 160px;
  padding-top: 13px;
  padding-bottom: 16px;
`;

const FullMenuButton = styled.button`
  font-weight: bolder;
  cursor: pointer;
  background-color: white;
  border: 1px solid #d8d9db;
  font-size: smaller;
  font-family: Quicksand;
  font-weight: bold;
  padding: 15px;
  position: relative;
  left: 180px;
  right: 160px;
  top:300px;
  width: 200px;
  high: 30px;
  margin: 10px;
  margin-bottom: 30px;
  outline: none;
  &:hover ${FullMenuButton} {
    border: 2px solid #DA3743;
  }  
`;

const Blur = styled.div`
  content: " ";
  display: ${(props) => props.showMenu ? 'none' : 'block'};
  position: relative;
  bottom: 300px;
  height: 300px;
  background-image: linear-gradient(to top,#fff,rgba(255,255,255,0));
  background-color: rgba(255,255,255,.2);
`;

const MainBox = styled.div`
  flexBasis: 80%;
  display: ${(props) => props.expanded ? 'block' : 'none'};
`;

const HiddenCollapseButton = styled.div`
  display: ${(props) => props.showButton ? 'block' : 'none'};
`;

const ClosingText = styled.div`
  font-family: Quicksand;
  font-weight: bolder;
`;

const CollapseButton = styled.button`
  font-weight: bolder;
  cursor: pointer;
  background-color: white;
  border: 1px solid #d8d9db;
  font-size: smaller;
  font-family: Quicksand;
  font-weight: bold;
  padding: 15px;
  position: fixed;
  bottom: 6em;
  left: 180px;
  right: 160px;
  width: 200px;
  high: 20px;
  margin-bottom: 90px;
  outline: none;
  &:hover ${CollapseButton} {
    border: 2px solid #DA3743;
  }
`;
