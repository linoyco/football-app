import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MaterialTable, { Column } from 'material-table';

const StyledAppDiv: any = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
	align-content: center;
  width: 100%;
  height: 80%;
`;

export interface RowData {
  // imageUrl: string;
  // name: string;
  // address: string;
  // founded: number;
  // id: number;

  id: number,
  name: string,
  fullName: string,
  country: string,
  founded: string,
  officialPage: string,
  phone: string,
  email: string,
  address: string,
  badgeURL: string

};

const TeamsListPage: React.FunctionComponent = () => {
  const history = useHistory();

  const navigateToOneTeamDetails = (teamID: number) => {
    history.push(`/teams/${teamID}`);
  }

  const navigateToTeamsList = () => {
    history.push('/teams');
  }

  React.useEffect(() => {
    navigateToTeamsList();
  }, []);

  const columns: Array<Column<RowData>> = [
    { title: '', field: 'badgeURL', sorting: false },
    { title: 'Team name', field: 'name' },
    { title: 'Location', field: 'address' },
    { title: 'Founded', field: 'founded' },
  ];

  const DemoRows: RowData[] = [
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
    { badgeURL: 'll', name: 'Linoy', fullName: 'Cercle Brugge', country: 'Belgium', address: 'Atlit', founded: '1993', id: 20, officialPage: '', email: '', phone: '' },
  ];

  const handleRowClicked = (clickedRow: RowData | undefined) => {
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
