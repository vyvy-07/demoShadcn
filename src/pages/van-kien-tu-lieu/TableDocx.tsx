import type { PropsGlobal } from '@/interface/propsGlobal';
import React from 'react';

const TableDocx = ({ className }: PropsGlobal) => {
  return (
    <div className={`border border-grey rounded-[2px]${className}`}>
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableDocx;
