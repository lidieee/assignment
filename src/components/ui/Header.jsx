import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
        <div className="container">
            <div className="title">♡ TODO LIST ♡</div>
            <div className="name">LYDIA</div>
        </div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  .container {
    border: 0 none;
    height: 50px;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
}

.container .title{
  font-weight: bold;
}

.container .name{
  font-size: 15px;
}
`;
