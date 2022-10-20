import React from 'react'
import { useSelector } from 'react-redux';
import { ErrorWrapper } from './Error.styled'

const Error = () => {
    const error = useSelector((state) => state.items.error);

  return (
    <ErrorWrapper>{error}</ErrorWrapper>
  )
}

export default Error