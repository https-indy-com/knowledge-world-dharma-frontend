import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@kwd/ui';

import Box from '../../components/Box';
import Table from '../../components/Table';

function Threads() {
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Title',
        accessor: 'col2',
      },
      {
        Header: 'Option',
        maxWidth: 70,
        minWidth: 50,
        width: 60,
        // eslint-disable-next-line
        Cell: ({ row }) => (
          <div className="space-x-2">
            <Link to={row.original.col1}>
              <Button>Info</Button>
            </Link>
            <Button>Delete</Button>
          </div>
        ),
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Nithi Nomprawat',
        col2: 'you want Hello world',
      },
    ],
    [],
  );

  return (
    <>
      <Box className="text-lg font-medium">Thread</Box>
      <Box className="flex flex-col">
        <Table columns={columns} data={data} />
      </Box>
    </>
  );
}

export default Threads;