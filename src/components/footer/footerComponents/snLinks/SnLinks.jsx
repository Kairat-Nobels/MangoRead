import { dataFooter } from '../../../../service/staticData/staticData'
import classes from '../../Footer.module.css'
function SnLinks()
{
  return (
    <div className={classes.snLinks}>
      {dataFooter.snLinks.map(item => (
        <a style={{ textDecoration: 'none' }} target='_blank' key={item.title} href={item.url} rel="noreferrer">
          <div className={classes.snLink}>
            {item.icon}
            <div className={classes.snLinkText}>{item.title}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default SnLinks
