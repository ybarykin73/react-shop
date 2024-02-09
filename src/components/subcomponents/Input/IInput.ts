export interface IProps {
  name: string
  label?: string,
  helpText?: string,
  type: string,
  handleChange?: (e: string) => void
}