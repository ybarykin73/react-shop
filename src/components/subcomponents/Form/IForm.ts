import { IScheme } from "../../../entities/Form/ISheme"

export interface IProps {
  scheme: Array<IScheme>
  onSubmit: (formData: Record<string, string>) => void
}
