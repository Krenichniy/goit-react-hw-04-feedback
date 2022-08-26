const { default: styled } = require('styled-components');

export const StyledUL = styled.ul`
        margin:0;
        padding:0;
        list-style:none;
`
export const ListItem = styled.li`
  list-style:none;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 10px;
`;

export const ListText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.09em;
  text-align: center;
`;
