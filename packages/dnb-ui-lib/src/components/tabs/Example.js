/**
 * UI lib Component Example
 *
 */

import React, { PureComponent, Fragment } from 'react'
import Tabs from './Tabs'
import Input from '../input/Input'
import styled from 'react-emotion'

class Example extends PureComponent {
  static AdditionalCallback = {
    info: ({ CodeRenderer }) => (
      <Fragment>
        <h3>Data Structure</h3>
        <CodeRenderer language="json">{dataBlob}</CodeRenderer>
      </Fragment>
    )
  }
  state = { activeTabKey: 'third' }
  openTab = ({ key }) => {
    this.setState({
      activeTabKey: key
    })
  }
  isActive(tabKey) {
    return this.state.activeTabKey === tabKey
  }

  render() {
    return (
      <Fragment>
        <Tabs data={data}>{exampleContent}</Tabs>
        <Tabs
          selected_key="second"
          direction="right"
          label="Some Tabs label"
          data={data}
          on_change={this.openTab}
          render={({ Wrapper, TabsList, Tabs }) => {
            return (
              <Wrapper>
                <TabsList>
                  <small>
                    <b>Active:</b> {this.state.activeTabKey}
                  </small>
                  <Tabs />
                </TabsList>
              </Wrapper>
            )
          }}
        >
          {exampleContent}
        </Tabs>
      </Fragment>
    )
  }
}

const exampleContent = {
  first: <h2>First</h2>,
  second: <Input>Focus me with next Tab key</Input>,
  third: (
    <p>
      Eros semper blandit tellus mollis primis quisque platea sollicitudin
      ipsum
    </p>
  ),
  fourth: <h2>Fourth</h2>
}

const data = [
  { title: 'First', key: 'first' },
  { title: 'Second', key: 'second' },
  { title: 'Third', key: 'third', disabled: true },
  { title: 'Fourth', key: 'fourth' }
]
const dataBlob = JSON.stringify(data, null, 2)

export { Example }
export default () => (
  <Wrapper>
    <Example />
  </Wrapper>
)

const Wrapper = styled.div`
  .dnb-tabs {
    margin-top: 3rem;
  }
`