import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MaterialTable, { Column } from 'material-table';
import * as ApiObjects from '../Api/ApiObjects';
import { fetchTeamsList } from '../State/Actions/App';

const StyledAppDiv: any = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
	align-content: center;
  width: 100%;
  height: 80%;
`;

const TeamsListPage: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch: Dispatch = useDispatch();

  const localTeamsList: ApiObjects.ITeamsList = useSelector((state: any) => state.app.teamsList);

  React.useEffect(() => {
    navigateToTeamsList();
    dispatch(fetchTeamsList());
  }, []);

  const navigateToOneTeamDetails = (teamID: number) => {
    history.push(`/teams/${teamID}`);
  }

  const navigateToTeamsList = () => {
    history.push('/teams');
  }

  const columns: Array<Column<ApiObjects.ITeamDetails>> = [
    { title: '', field: 'badgeURL', sorting: false },
    { title: 'Team name', field: 'name' },
    { title: 'Location', field: 'address' },
    { title: 'Founded', field: 'founded' },
  ];

  const DemoRows: ApiObjects.ITeamDetails[] = [
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
  ];

  const handleRowClicked = (clickedRow: ApiObjects.ITeamDetails | undefined) => {
    if (typeof clickedRow !== 'undefined') {
      navigateToOneTeamDetails(clickedRow.id);
    }
  }

  return (
    <StyledAppDiv>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <MaterialTable
        columns={columns}
        data={DemoRows}
        style={{ maxHeight: '0px', width: '60%' }}
        localization={{
          header: { actions: '' }
        }}
        options={{
          search: false,
          showTextRowsSelected: false,
          showTitle: false,
          showFirstLastPageButtons: false,
          headerStyle: { fontWeight: 'bold' },
          actionsColumnIndex: -1,
          emptyRowsWhenPaging: false,
          pageSizeOptions: [1, 2, 3, 4, 5, 6]
        }}
        onRowClick={(e, rowData) => handleRowClicked(rowData)}
      />
    </StyledAppDiv>
  );
}

export default TeamsListPage;
