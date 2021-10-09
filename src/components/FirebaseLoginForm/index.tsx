import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import FormikFormInput from '@components/FormikFormInput'

import { signInThenGetRealTimeData } from '@firebase-folder/main'

import { FirebaseLoginFormItem } from '@other-support/Interfaces'
import { FirebaseLoginFormItemType } from '@other-support/Types'
import { FirebaseLoginFormItemKeyType } from '@other-support/Enums'

import { sleep } from '@other-support/Consts'

const inputs: Array<FirebaseLoginFormItem> = [
  {
    id: FirebaseLoginFormItemKeyType.email,
    label: 'Email*',
    type: 'text',
    placeholder: 'name@example.com',
  },
  {
    id: FirebaseLoginFormItemKeyType.password,
    label: '密碼*',
    type: 'password',
    placeholder: '請輸入您的密碼',
  },
]

const initialValues: FirebaseLoginFormItemType = {
  [FirebaseLoginFormItemKeyType.email]: '',
  [FirebaseLoginFormItemKeyType.password]: '',
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('無效的電子郵件')
    .required('本欄位為必填'),
  password: Yup.string().required('本欄位為必填'),
})

const FirebaseLoginForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] =
    React.useState(false)

  const [errorString, setErrorString] =
    React.useState('')

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)

      try {
        const realTimeData =
          await signInThenGetRealTimeData({
            email:
              values[
                FirebaseLoginFormItemKeyType.email
              ],
            password:
              values[
                FirebaseLoginFormItemKeyType
                  .password
              ],
          })

        if (!realTimeData) {
          throw new Error(
            'realTimeData not found'
          )
        }
      } catch (error) {
        setErrorString('Login failed')
        await sleep(2000)

        setErrorString('')
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
    },
  })

  return (
    <div>
      <div>Update: 2020/09/06 15:30</div>
      <p>請先登入</p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formik.handleSubmit}
      >
        <div
        // className="flex flex-col md:flex-row"
        >
          <div className="flex-1 md:pr-3">
            {inputs.map(each => (
              <FormikFormInput
                key={`contact-us-form-input-${each.id}`}
                // className="flex flex-row my-1 md:my-2"
                inputProps={{
                  id: each.id,
                  name: each.id,
                  placeholder: each.placeholder,
                  type: each.type,
                  onChange: formik.handleChange,
                  value: formik.values[each.id],
                }}
                label={each.label}
                showError={
                  !!(
                    formik.touched[each.id] &&
                    formik.errors[each.id]
                  )
                }
                errorString={
                  formik.errors[each.id]
                }
              />
            ))}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          確認送出
        </button>
        {errorString && <p>{errorString}</p>}
      </form>
    </div>
  )
}

export default FirebaseLoginForm
