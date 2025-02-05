/**
 * Anchor Tag
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Anchor = ({ children, className, href, ...rest }) => {
  if (/^#/.test(href)) {
    return (
      <AnchorLink
        offset="100"
        href={href}
        className={classnames('dnb-anchor', className)}
        {...rest}
      >
        {children}
      </AnchorLink>
    )
  }
  if (/^http/.test(href)) {
    rest.target = '_blank'
  } else if (/^!/.test(href)) {
    rest.target = '_blank'
    href = href.substr(1)
  }
  return (
    <a
      href={href}
      className={classnames('dnb-anchor', className)}
      {...rest}
    >
      {children}
    </a>
  )
}
Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
Anchor.defaultProps = {
  className: null
}

export default Anchor
