import { Input as ChakraInput, Text } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
const withChakraInput = (Input) => {
  const WrappedComponent = ({ name, label, type }) => {
    const { register, errors } = useFormContext()
    return (
      <>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <Input name={name} type={type} ref={register} />
        {errors[name] ? <Text>{errors[name].message}</Text> : null}
      </>
    )
  }

  return WrappedComponent
}

export const Input = withChakraInput(ChakraInput)
