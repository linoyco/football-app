import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledAppDiv: any = styled.div`
  width: 100%;
  height: 80%;
`;

const TeamsListPage: React.FunctionComponent = () => {
  const history = useHistory();

  const navigateToOneTeamDetails = (teamID: number) => {
    history.push(`/teams/${teamID}`);
}

  return (
    <StyledAppDiv>
      Hello TeamsListPage page :)
      <button onClick={() => navigateToOneTeamDetails(2)}>click</button>
    </StyledAppDiv>
  );
}

export default TeamsListPage;
