import React from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

const Notification = () => (
  <Card style={{ margin: 20 }}>
    <CardTitle title="お知らせ" />
    <CardText>
      下記の項目を項目を押下することで消去することができます
    </CardText>
    <List>
      <ListItem leftCheckbox={<Checkbox />}>テスト1</ListItem>
      <ListItem leftCheckbox={<Checkbox />}>テスト1</ListItem>
      <ListItem leftCheckbox={<Checkbox />}>項目を押下すると</ListItem>
      <ListItem leftCheckbox={<Checkbox />}>ListItemを消去し、</ListItem>
      <ListItem leftCheckbox={<Checkbox />}>確認したよということに</ListItem>
      <ListItem leftCheckbox={<Checkbox />}>します。</ListItem>
    </List>
  </Card>
)

export default Notification
