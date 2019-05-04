import React , { PureComponent } from 'react'

class PureComponent extends PureComponent {
  constructor() {
      super()
  }
  render() {
      return (
          <div>
          </div>
      )
  }
}

// only re-render if the props value changes from parent

export default PureComponent;