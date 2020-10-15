import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { MenuItem, StyledHeader } from '../styles/components';
import cartImg from '../images/cart.png';
import hallowenLogo from '../images/halloween-card.png';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to='/'>
      <img src={hallowenLogo} alt='cartlogo'/>
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to='/'>Productos</Link>
        </MenuItem>
        <MenuItem margin>
        <a href='https://github.com/GodoyGabriel'>Github</a>
        </MenuItem>
        <MenuItem>
          <Link to='/cart'>
            <span>
              <img src={cartImg} alt='cartlogo'/>
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
