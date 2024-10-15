import Image from 'next/image'

const Empty = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='empty-state-image'>
      <Image src='/images/empty-svg.svg' alt='text' width={600} height={400} />
      {children}
    </div>
  )
}

export default Empty
