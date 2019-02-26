import React from "react";
// import styled from 'styled-components';
const { styled } = window;

const MenuItem = (props) => {
  return (
    <OutterBox>
      <SubBox>
        <div>
          {props.items.map((item, i) => {
            if (i < 10) {
              return (
                <ItemName key={i}>
                  {item.name}
                  <Description>
                    {item.description} <Price>{'$' + item.price}</Price>
                    <Space />
                  </Description>
                </ItemName>
              );
            }
          })}
        </div>
      </SubBox>

      <SubBox2>
        <div>
          {props.items.map((item, i) => {
            if (i >= 10 && i < 20) {
              return (
                <ItemName key={i}>
                  {item.name}
                  <Description>
                    {item.description} <Price>{'$' + item.price}</Price>
                    <Space />
                  </Description>
                </ItemName>
              );
            }
          })}
        </div>
      </SubBox2>

    </OutterBox>
  );
}

export default MenuItem;

// Set up style-component

const Space = styled.p``;

const OutterBox = styled.div`
  padding-top:10px;
  display:flex;
`;

const SubBox = styled.div`
  flex: 1;
`;

const SubBox2 = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-family: Quicksand;
  font-weight: bolder;
  font-size: smaller;
`;

const Description = styled.div`
  font-family: Quicksand;
  font-weight: lighter;
  font-size: 11px;
`;

const Price = styled.span`
  font-size: 11px;
`;