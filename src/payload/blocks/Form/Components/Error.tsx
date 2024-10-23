const Error = ({ label, error }: { label: string; error: any }) => {
  return (
    <div style={{ color: 'red', marginTop: '-20px' }}>
      {label} is {error?.type}
    </div>
  )
}

export default Error
