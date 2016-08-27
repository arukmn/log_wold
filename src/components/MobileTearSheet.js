import React from 'react'

class MobileTearSheet extends React.Component {
  propTypes = {
    children: React.PropTypes.node,
    height: React.PropTypes.number,
  }

  constructor() {
    this.contextTypes = {
      muiTheme: React.PropTypes.object,
    }
  }

  render() {
    const styles = {
      root: {
        float: 'left',
        marginBottom: 24,
        marginRight: 24,
        width: 260,
      },
      container: {
        border: 'solid 1px #d9d9d9',
        overflow: 'hidden',
      },
    }

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MobileTearSheet
