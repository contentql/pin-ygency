import Image from 'next/image'
import Link from 'next/link'

const Branding = () => {
  return (
    <Link
      className='branding'
      href='https://contentql.io'
      target='_blank'
      aria-label='contentQL website'>
      <Image
        src='/images/contentql-logo.png'
        alt='contentql logo'
        height={24}
        width={24}
      />
      Made in ContentQL
    </Link>
  )
}

export default Branding
