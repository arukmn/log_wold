import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow }
from 'material-ui/Table'
import AttendanceRow from 'components/AttendanceRow.jsx'

// 何故かAttendanceRowで別のコンポーネント化すると大抵の処理が動作しなくなる
const dummy = [
  { id: 1, name: 'John Smith', status: 'Unemployed' },
  { id: 2, name: 'Randal White', status: 'Unemployed' },
  { id: 3, name: 'Stephanie Sanders', status: 'Employed' },
]

// TODO 同じ行をクリックするとインデックスが入らない。ただしクリック回数が偶数の時だけ発生する。
const test = (clickRowIdxs) => {
  if (clickRowIdxs.length === 0) {
    return
  }
  const clickData = dummy[+(clickRowIdxs)]
  console.log(JSON.stringify(clickData, null, '\t'))
}

// この箇所はcontainerからイベントを渡すようにして、
// 他の箇所でもボタン押下時の挙動を変更出来るようにする
const modalTest = (clickRowId) => {
  console.log(JSON.stringify(clickRowId))
}

const TableExampleSimple = () => (
  <Table
    selectable={false}
    onRowSelection={(selectedRows) => test(selectedRows)}
  >
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableHeaderColumn colSpan="4" style={{ textAlign: 'left', fontSize: 24 }}>
          申請中・予約済みシフト一覧(Props化)
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>test</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
      showRowHover
    >
      {dummy.map((todo) =>
        <AttendanceRow
          {...todo}
          onClick={() => modalTest(todo.id)}
        />
      )}
    </TableBody>
  </Table>
)

export default TableExampleSimple
