/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from '@mui/material'
import { dataFooter } from '../../service/staticData/staticData'
import classes from './Footer.module.css'
import { FooterMap } from './footerComponents/footerMap/FooterMap'
import { Map } from './footerComponents/footerMapWith2Gis/Map'

import SnLinks from './footerComponents/snLinks/SnLinks'

function Footer()
{
  return (
    <footer>
      <Container disableGutters width='lg'>
        <div className={classes.footerInner1}>
          <a href=''
            style={{
              textDecoration: 'none'
            }}
          >
            <div className={classes.footerLogo}>
              <img src={dataFooter.logohead} alt='logotipIcon' />
              <div className={classes.logoText}>
                <span>{dataFooter.siteName}</span>
                <p>{dataFooter.slogan}</p>
              </div>
            </div>
          </a>
          <SnLinks />
          {/* через iframe */}
          <FooterMap />
          {/* через googleMaps */}
          {/* <Map/> */}
        </div>
      </Container>
      <div className={classes.footerInner2}>
        <div className={classes.line}></div>
        <div className={classes.posInner}>
          <h6>{dataFooter.reserv}</h6>
          <div className={classes.servLinks}>
            {dataFooter.serviceLinks.map(item => (
              <a key={item.title} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
