import React from 'react'
import MenuItem from 'material-ui/MenuItem'

export function setSelectItems(items, unit = '') {
  return items.map((item, i) => <MenuItem value={i} key={i} primaryText={`${item} ${unit}`} />)
}
