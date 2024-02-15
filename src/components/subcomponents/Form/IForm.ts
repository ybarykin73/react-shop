import { IScheme } from "../../../entities/Form/ISheme"

export interface IProps {
  error: string
  scheme: Array<IScheme>
  onSubmit: (formData: Record<string, string>) => void
}
