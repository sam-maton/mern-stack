import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

export default function Error() {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Oh! Page not found</h3>
          <p>{"We can't find the page you are looking for"}</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}
