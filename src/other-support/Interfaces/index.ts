import { FirebaseLoginFormItemKeyType } from '@other-support/Enums'

interface FormItem {
  label: string
  type: string
  placeholder?: string
}

export interface FirebaseLoginFormItem
  extends FormItem {
  id: FirebaseLoginFormItemKeyType
}
