/**
 * MainMenu Provider
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

let lastScrollPosition = 0

export const MainMenuContext = React.createContext({
  // just to have som default values (to avoid destructuring error later)
  toggleMenu: null,
  openMenu: null,
  closeMenu: null,
  isOpen: null,
  isClosing: null,
  isActive: false
})

export class MainMenuProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      ...{
        isOpen: false,
        isClosing: false,
        isActive: false
      },
      ...props
    }
  }

  toggleMenu = (state = null) => {
    if (state === null) {
      state = this.state.isOpen
    }
    clearTimeout(this.timeout)
    this.timeout = setTimeout(
      () => {
        const isOpen = !state
        this.setState({
          isOpen,
          isClosing: false,
          isActive: isOpen
        })

        // scroll to top on opening the menu, and back again
        if (typeof window !== 'undefined') {
          try {
            const top =
              !isOpen && lastScrollPosition > 0 ? lastScrollPosition : 0
            window.scrollTop = top
            window.scrollTo({
              top,
              behavior: 'smooth'
            })
          } catch (e) {
            console.log('Could not run scrollTo', e)
          }
        }
      },
      state ? 800 : 400
    )

    // scroll to top on opening the menu, and back again
    if (!state && typeof window !== 'undefined') {
      lastScrollPosition = window.scrollY
    }

    this.setState({
      isClosing: state,
      isActive: true
    })
  }

  openMenu = () => {
    this.toggleMenu(false)
  }

  closeMenu = () => {
    this.toggleMenu(true)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { children } = this.props

    return (
      <MainMenuContext.Provider
        value={{
          toggleMenu: this.toggleMenu,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu,
          ...this.state
        }}
      >
        {children}
      </MainMenuContext.Provider>
    )
  }
}
