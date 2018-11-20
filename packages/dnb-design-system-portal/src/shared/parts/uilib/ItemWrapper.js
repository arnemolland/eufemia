/**
 * ComponentItem
 *
 */

import { Button, Tabs } from 'dnb-ui-lib/src'
import Code, { CodeRenderer } from './Code'
import React, { Component, Fragment } from 'react'

import { CloseButton } from 'dnb-ui-lib/src/components/modal'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import createHistory from 'history/createBrowserHistory'
import { css } from 'react-emotion'
import { navigate } from '@reach/router'
import { fullscreen as fullscreenIcon } from 'dnb-ui-lib/src/icons/secondary_icons'
// import fullscreenIcon from 'dnb-ui-lib/src/icons/fullscreen'

const getLocation = () => {
  if (typeof window === 'undefined') {
    return null
  }
  const { location } = createHistory()
  return location
}

const tabsWrapperStyle = css`
  ${'' /*
  position: sticky;
  top: 5rem;
  z-index: 2;
  */};

  .dnb-tabs__tabs {
    justify-content: space-between;
    align-items: center;
  }

  .fullscreen-page & {
    top: 0;
    .is-sticky .dnb-tabs__tabs {
      margin: 0 -2rem;
    }
  }
  .toggle-fullscreen {
    margin-right: 1rem;
  }
  .dnb-modal__close-button {
    position: relative;
    top: auto; /* to force the button to center */
    right: auto;
  }
`

class ComponentItemWrapper extends Component {
  static propTypes = {
    ExampleCode: PropTypes.string,
    Description: PropTypes.func.isRequired,
    Details: PropTypes.func.isRequired,
    DemoComponent: PropTypes.func.isRequired,
    CodeComponent: PropTypes.func.isRequired,
    callback: PropTypes.shape({
      demo: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
      info: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
      code: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
    }),
    hideTabs: PropTypes.bool,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    tabs: PropTypes.array
  }
  static defaultProps = {
    ExampleCode: null,
    hideTabs: false,
    callback: null,
    tabs: [
      { title: 'Demo', key: 'demo' },
      { title: 'Details', key: 'info' },
      { title: 'Markup', key: 'code' }
    ]
  }
  state = {
    activeTabKey: 'demo',
    wasFullscreen: null
  }
  constructor(props) {
    super(props)
    const location = getLocation()
    if (location)
      this.state.wasFullscreen = /fullscreen/.test(location.search)
  }
  openTab = ({ key }) => {
    this.setState({
      activeTabKey: key
    })
  }
  isActive(tabKey) {
    return this.state.activeTabKey === tabKey
  }
  componentWillMount() {
    const location = getLocation()
    if (location)
      this.setState({
        wasFullscreen: /fullscreen/.test(location.search)
      })
  }
  openFullscreen = () => {
    const location = getLocation()
    if (location)
      navigate(
        `${location.pathname}?fullscreen#${this.state.activeTabKey}`
      )
  }
  quitFullscreen = () => {
    const location = getLocation()
    if (location) navigate([location.pathname, location.hash].join(''))
  }
  render() {
    const {
      title,
      id,
      tabs,
      hideTabs,
      ExampleCode,
      Description,
      Details,
      DemoComponent,
      CodeComponent,
      callback: Additional
    } = this.props

    return (
      <div className="wrapped-item">
        {!hideTabs ? (
          <h1>{title}</h1>
        ) : (
          <h4>
            <Link to={`/uilib/components/${id}`}>{title}</Link>
          </h4>
        )}
        {!hideTabs && (
          <Tabs
            data={tabs}
            on_change={this.openTab}
            render={({ Wrapper, TabsList, Tabs }) => {
              return (
                <Wrapper className={tabsWrapperStyle}>
                  <TabsList>
                    <div className="dnb-tabs__tabs__inner">
                      <Tabs />
                    </div>
                    {this.state.wasFullscreen ? (
                      <CloseButton
                        on_click={this.quitFullscreen}
                        title="Quit Fullscreen"
                        className="toggle-fullscreen"
                      />
                    ) : (
                      <Button
                        on_click={this.openFullscreen}
                        className="toggle-fullscreen"
                        variant="secondary"
                        title="Fullscreen"
                        icon={fullscreenIcon}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        // href={`?fullscreen#${this.state.activeTabKey}`}
                      />
                      // <svg viewBox="0 0 32 32" height="16" width="16">
                      // <path d="M31,18c-0.509,0-1,0.438-1,1v11H2V2h11c0.531,0,1-0.469,1-1c0-0.531-0.5-1-1-1H2C0.895,0,0,0.895,0,2v28   c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V18.985C32,18.431,31.594,18,31,18z" />
                      // <path d="M31,0H21c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h7.596L8.282,22.313c-0.388,0.388-0.388,1.017,0,1.405   c0.388,0.388,1.017,0.388,1.404,0L30,3.404V11c0,0.552,0.448,1,1,1s1-0.448,1-1V1v0C32,0.462,31.538,0,31,0z" />
                      // </svg>
                    )}
                  </TabsList>
                </Wrapper>
              )
            }}
          />
        )}

        {this.isActive('demo') && (
          <div className="dnb-tabs__content">
            {!hideTabs && <Description />}
            <DemoComponent />
            {Additional /* here we use AdditionalCallback */ &&
              Additional.demo && (
                <Additional.demo CodeRenderer={CodeRenderer} />
              )}
          </div>
        )}

        {this.isActive('info') && (
          <div className="dnb-tabs__content">
            <Details />
            {Additional /* here we use AdditionalCallback */ &&
              Additional.info && (
                <Additional.info CodeRenderer={CodeRenderer} />
              )}
            {ExampleCode && (
              <Fragment>
                <h3>JSX Example</h3>
                <CodeRenderer language="jsx">{ExampleCode}</CodeRenderer>
              </Fragment>
            )}
          </div>
        )}

        {this.isActive('code') && (
          <div className="dnb-tabs__content">
            <Code source={CodeComponent} />
            {Additional /* here we use AdditionalCallback */ &&
              Additional.code && (
                <Additional.code CodeRenderer={CodeRenderer} />
              )}
          </div>
        )}
      </div>
    )
  }
}

export default ComponentItemWrapper