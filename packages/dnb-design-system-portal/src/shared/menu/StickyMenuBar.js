/**
 * Card
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, injectGlobal } from 'react-emotion'
// import Head from 'react-helmet'
import MainMenu from './MainMenu'
import gridSvg from '../../assets/images/grid-32x32.svg'
import { FormLabel, Switch, Logo } from 'dnb-ui-lib/src'

export default class StickyMenuBar extends Component {
  state = {
    showOverlayMenu: false,
    showGrid: null
  }
  static propTypes = {
    header: PropTypes.string,
    slogan: PropTypes.string,
    onToggleMenu: PropTypes.func,
    preventBarVisibility: PropTypes.bool
  }
  static defaultProps = {
    header: null,
    slogan: 'EUFEMIA', // gatsbyConfig.siteMetadata.title
    onToggleMenu: null,
    preventBarVisibility: false
  }
  toggleMenuHandler = (state = null) => {
    const showOverlayMenu =
      state !== null ? state : !this.state.showOverlayMenu
    if (this.props.onToggleMenu) {
      this.props.onToggleMenu(showOverlayMenu)
    }
    this.setState({
      showOverlayMenu
    })
  }
  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      this.state.showGrid = parseFloat(
        window.localStorage.getItem('showGrid')
      )
        ? true
        : false
    }
  }
  toggleGrid = () => {
    this.showGrid(!this.state.showGrid)
    this.setState({ showGrid: !this.state.showGrid })
  }
  showGrid = showGrid => {
    if (typeof document !== 'undefined') {
      const elem = document.querySelector('.dnb-body')
      if (elem) {
        if (showGrid) {
          elem.classList.add('dev-grid')
        } else {
          elem.classList.remove('dev-grid')
        }
      }
      const page = document.querySelector('.page-content')
      if (page) {
        if (showGrid) {
          page.classList.add('dev-grid')
          page.classList.add('grid-not-fixed')
        } else {
          page.classList.remove('dev-grid')
        }
      }
      const body = document.querySelector('body')
      if (body) {
        if (showGrid) {
          body.classList.add('dev-grid')
        } else {
          body.classList.remove('dev-grid')
        }
      }
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('showGrid', showGrid ? 1 : 0)
      }
    }
  }
  componentDidMount() {
    if (this.state.showGrid) {
      this.showGrid(true)
    }
  }
  render() {
    const { header, slogan, preventBarVisibility } = this.props
    if (preventBarVisibility) {
      return (
        <span />
        // <Head>
        //   <title>{header || slogan}</title>
        // </Head>
      )
    }
    return (
      <div css={barStyle}>
        {this.state.showOverlayMenu && (
          <MainMenu
            enableOverlay={true}
            setAsOverlay={true}
            onToggleOverlay={this.toggleMenuHandler}
          />
        )}
        {!this.state.showOverlayMenu && (
          <div
            className={`sticky ${this.state.showGrid ? 'dev-grid' : ''}`}
          >
            {/* <Link to="/">
            <DNBLogo className="logo" width="47" height="32" /> {slogan}
          </Link> */}
            <button
              className="dnb-button dnb-button--reset menu-bar"
              onClick={this.toggleMenuHandler}
            >
              <Logo height={80} />
              {/* <DNBLogo className="logo" width="47" height="32" /> */}
              {slogan}
            </button>
            {header && <span className="heading">{header}</span>}
            {(process.env.NODE_ENV === 'development' && (
              <div className="toggle-grid">
                <FormLabel for_id="switch-grid" text="Grid" />
                <Switch
                  id="switch-grid"
                  checked={this.state.showGrid}
                  on_change={({ checked }) => this.toggleGrid(checked)}
                />
              </div>
            )) || <span />}
          </div>
        )}
      </div>
    )
  }
}

injectGlobal`
  .dev-grid {
    background-repeat: repeat;
    background-attachment: fixed;
    background-color: transparent;
    ${'' /* background-image: url('/assets/images/grid-32x32.svg'); */}
    background-image: url(${gridSvg});
  }
  .grid-not-fixed {
    background-attachment: local;
  }
`

const barStyle = css`
  .sticky {
    position: fixed;
    z-index: 200;
    top: 0;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    width: 100%;
    padding: 0 0 0 2em;

    align-items: center;

    background-color: var(--color-light-grey);
    border-bottom: 1px solid var(--color-outline-grey);

    max-height: 100px;
    overflow: hidden;
    white-space: nowrap;

    svg {
      margin-right: 2em;
    }
  }

  .logo {
    color: #007272;
    fill: currentColor;
  }
  &.active .logo-slogan {
    color: #007272;
    text-decoration: underline;
  }
  &.active .logo-slogan:hover {
    color: #111;
  }

  .show-menu:hover {
    opacity: 0.6;
  }

  .toggle-grid {
    display: flex;
    align-items: flex-end;
    margin-right: 3rem;
  }
  .toggle-grid label {
    padding-right: 1rem;
  }

  .dnb-button.menu-bar {
    display: flex;
    align-items: center;
    cursor: pointer;

    margin-left: -0.5rem;
  }

  .heading {
    font-size: 1.5em;
    font-weight: 200;
    text-align: center;
  }
`