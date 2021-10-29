import React from 'react';

const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operated_at}</td>
    </tr>
  );
};

export default OperationLog;
