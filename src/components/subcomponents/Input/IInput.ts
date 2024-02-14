export interface IProps {
  name: string,
  type: string,
  label?: string,
  required?: boolean
  helpText?: string,
  handleChange?: (e: string) => void
}