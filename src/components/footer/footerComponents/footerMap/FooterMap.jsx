import { links } from '../../../../service/links/links'

export function FooterMap()
{
  return (
    <div>
      <iframe
        src={links.map}
        style={{
          width: '400px',
          height: '250px',
          border: 'none',
          filter: 'drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.15))',
          borderRadius: '20px'
        }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}
