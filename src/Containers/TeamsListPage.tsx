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
  imageUrl: string;
  name: string;
  address: string;
  founded: number;
  id: number;
};

const TeamsListPage: React.FunctionComponent = () => {
  const history = useHistory();

  const navigateToOneTeamDetails = (teamID: number) => {
    history.push(`/teams/${teamID}`);
  }

  const columns: Array<Column<RowData>> = [
    { title: '', field: 'imageUrl', sorting: false },
    { title: 'Team name', field: 'name' },
    { title: 'Location', field: 'address' },
    { title: 'Founded', field: 'founded' },
  ];

  const DemoRows: RowData[] = [
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 20 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 4 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 65 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 23 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 76 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 58 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 33 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 75 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 42 },
    { imageUrl: 'll', name: 'Linoy', address: 'Atlit', founded: 1993, id: 68 },
  ];

  const handleRowClicked = (clickedRow: RowData | undefined) => {
    if (typeof clickedRow !== 'undefined') {
      navigateToOneTeamDetails(clickedRow.id);
    }
  }

  return (
    <StyledAppDiv>
      {/* <button onClick={() => navigateToOneTeamDetails(2)}>click</button> */}
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
          // rowStyle: rowData => (
          //   rowData.tableData.checked === true
          //     ? { background: '#efeff4' }
          //     : { background: 'white' }
          // ),
          emptyRowsWhenPaging: false,
          pageSizeOptions: [1, 2, 3, 4, 5, 6]
        }}
        onRowClick={(e, rowData) => handleRowClicked(rowData)}
      />
    </StyledAppDiv>
  );
}

export default TeamsListPage;
