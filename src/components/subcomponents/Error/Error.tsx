import './Error.scss'

const Error = () => {
  return (
    <div className='error'>
      <h2 className="error__title title">
        Ошибка!
      </h2>
      <p className="error__description">
        Произошла ошибка,<br /> мы уже разбираемя в причинах.
      </p>
    </div>
  )
}

export default Error