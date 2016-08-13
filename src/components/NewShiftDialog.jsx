import React, { PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import label from 'settings/label.json'
import { setSelectItems } from 'utils/dom'

const customStyle = {
  width: '40%',
  maxWidth: 'none',
  height: '60%',
  maxHeight: 'none',
}
const startItems = setSelectItems(label.SHIFT_START_HOUR, label.HOUR)
const endItems = setSelectItems(label.SHIFT_END_HOUR, label.HOUR)
const changeTime = () => 100
const NewShiftDialog = ({ props }) => {
  const actions = [
    <FlatButton
      label="キャンセル"
      primary
      onTouchTap={props.closeNewShiftDialog}
    />,
    <FlatButton
      label="申請"
      primary
      onTouchTap={props.closeNewShiftDialog}
    />,
  ]


  return (
    <div>
      <Dialog
        title="新規シフト申請フォーム"
        actions={actions}
        modal={false}
        contentStyle={customStyle}
        open={props.showNewShiftDialog}
        autoScrollBodyContent={false}
      >
        下記項目を入力し「申請」ボタンを押下してください。<br />
        <DatePicker
          floatingLabelText="出勤予定日"
          autoOk
          container="inline"
        />
        <SelectField
          floatingLabelText="開始時間"
          maxHeight={300}
          onChange={changeTime}
        >
          {startItems}
        </SelectField>
        <SelectField
          floatingLabelText="終了時間"
          maxHeight={300}
          onChange={changeTime}
        >
          {endItems}
        </SelectField><br />
        <TextField
          floatingLabelText="特記事項・メモ"
          fullWidth
          multiLine
          rows={2}
          rowsMax={4}
        /><br />
      </Dialog>
    </div>
  )
}

NewShiftDialog.propTypes = {
  props: PropTypes.object.isRequired,
  showNewShiftDialog: PropTypes.bool.isRequired,
  closeNewShiftDialog: PropTypes.func.isRequired,
}

export default NewShiftDialog

// ISSUE: rowsMaxが動作していない
// ISSUE: autoScrollBodyContentはシフトを複数登録するときにtrueにする
