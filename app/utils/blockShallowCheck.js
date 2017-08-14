// @flow
import React, { Component } from 'react'

type Props = {
  data: Object
}

export default function (WrappedComponent: ReactClass<*>): ReactClass<{}> {
  return class extends Component {
    props: Props
    static displayName = `blockShallowCheck(${getDisplayName(WrappedComponent)})`;

    shouldComponentUpdate (nextProps: Props) {
      return nextProps.data !== this.props.data
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

function getDisplayName (WrappedComponent: ReactClass<*>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
