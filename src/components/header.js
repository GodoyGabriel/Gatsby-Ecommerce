import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { MenuItem, StyledHeader } from '../styles/components';
import cartImg from '../images/cart.png';
import logo from '../images/ecommerce.png';

const Header = () => (
  <StyledHeader>
    <Link to='/'>
      <img src={logo} alt='cartlogo'/>
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

  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
