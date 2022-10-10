// React Imports
import {FC, useState} from 'react'

// Redux impors
import {partnerRegAction} from '../partnerRegAction'

// Hook Imports
import {useAppDispatch} from '../../../hooks'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {object, string} from 'yup'
import {useFormik} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import clsx from 'clsx'

//Feature Imports
import {PartnerRegFormRequestModel} from '../models'

export const PartnerRegFormComponent: FC = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const partnerRegistrationa = (partnerRegModel: PartnerRegFormRequestModel) =>
    dispatch(partnerRegAction(partnerRegModel))

  const [payLater, setPayLater] = useState('false')
  const [payNow, setPaynow] = useState('false')

  const initialValues: PartnerRegFormRequestModel = {
    name: '',
    company: '',
    mobile_phone: '',
    email_address: '',
    postcode: '',
    pay_later: 'false',
    pay_now: 'false',
  }

  const partnerRegSchema = object().shape({
    name: string()
      .required('Please enter your name')
      .max(255, 'Name must be at most 255 characters'),
    company: string()
      .required('Please enter company name')
      .max(255, 'Name must be at most 255 characters'),
    mobile_phone: string()
      .required('Please enter mobile number')
      .matches(/^0(\s*)(7)(\s*)(\d(\s*)){9}$/, 'Please enter mobile number'),
    email_address: string()
      .required('Please enter email')
      .email('Please enter email')
      .min(5, 'Email must be at least 5 characters')
      .max(255, 'Name must be at most 255 characters'),
    postcode: string()
      .required('Must be a valid postcode')
      .max(255, 'postcode must be at most 30 characters'),
    pay_later: string().required(),
    pay_now: string()
      .required()
      .when('pay_later', (pay_later): any => {
        if (pay_later === 'false') {
          return string().matches(/true/, 'You have to select at least one of the services')
        }
      }),
  })

  const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      partnerRegistrationa(values).then((res) => {
        if (res) navigate('/partner/home')
      })
    },
    validationSchema: partnerRegSchema,
  })

  return (
    <main className='container-fluid bg-secondary'>
      <div className='content'>
        <button className='text-left mt-16 md:mt-12' onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            className='svg-inline--fa fa-arrow-left-long fa-1x text-secondary-content text-n4 cursor-pointer mb-1'
            icon='arrow-left-long'
          />
        </button>

        <div className='mb-5 flex flex-col space-y-1'>
          <h3 className='text-n3 md:text-n4 lg:text-n6  font-text font-bold leading-content text-secondary-content mb-0.5. whitespace-pre-line'>
            Join our network
          </h3>
          <span className='whitespace-pre-line  font-text font-content leading-content text-primary-content '>
            <span className='text-secondary-content whitespace-pre-line font-text font-content leading-content text-primary-content '>
              Offer{' '}
            </span>
            <p className='text-n0 whitespace-pre-line font-text font-bold leading-content text-secondary-content inline-block'>
              PayLater
            </p>
            <span className='text-secondary-content whitespace-pre-line font-text font-content leading-content text-primary-content '>
              {' '}
              to split servicing and repair work into monthly instalments - interest-free. Use{' '}
            </span>
            <p className='text-n0 whitespace-pre-line font-text font-bold leading-content text-secondary-content inline-block'>
              PayNow
            </p>
            <span className='text-secondary-content whitespace-pre-line font-text font-content leading-content text-primary-content '>
              {' '}
              to take secure payments online.
            </span>
          </span>
        </div>

        <div className='card'>
          <p className='text-n1 whitespace-pre-line font-text font-bold leading-content text-primary-content'>
            Join our network
          </p>

          <p className='text-n1 whitespace-pre-line font-text font-content leading-content text-primary-content'>
            Free to join, no monthly fees
          </p>

          <div className='pt-5'>
            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='name'>
                <FontAwesomeIcon icon='user' className='mr-1 text-primary' /> Name
              </label>

              <input
                type='text'
                id='name'
                className={clsx(
                  'input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30',
                  {'border-red-500': errors.name && touched.name},
                  {'border-green-500': !errors.name && touched.name}
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />

              <span role='alert' className='input-error'>
                {touched.name && errors.name && <>{errors.name}</>}
              </span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='name'>
                <FontAwesomeIcon icon='building' className='mr-1 text-primary' /> Company
              </label>

              <input
                type='text'
                id='company'
                className={clsx(
                  'input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30',
                  {'border-red-500': errors.company && touched.company},
                  {'border-green-500': !errors.company && touched.company}
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.company}
              />

              <span role='alert' className='input-error'>
                {touched.company && errors.company && <>{errors.company}</>}
              </span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='mobile_phone'>
                <FontAwesomeIcon icon='mobile' className='mr-1 text-primary' /> Mobile phone number
              </label>

              <input
                type='text'
                id='mobile_phone'
                className={clsx(
                  'input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30',
                  {'border-red-500': errors.mobile_phone && touched.mobile_phone},
                  {'border-green-500': !errors.mobile_phone && touched.mobile_phone}
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile_phone}
              />

              <span role='alert' className='input-error'>
                {touched.mobile_phone && errors.mobile_phone && <>{errors.mobile_phone}</>}
              </span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='email_address'>
                <FontAwesomeIcon icon='envelope' className='mr-1 text-primary' /> EMail address
              </label>

              <input
                type='text'
                id='email_address'
                className={clsx(
                  'input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30',
                  {'border-red-500': errors.email_address && touched.email_address},
                  {'border-green-500': !errors.email_address && touched.email_address}
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email_address}
              />

              <span role='alert' className='input-error'>
                {touched.email_address && errors.email_address && <>{errors.email_address}</>}
              </span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='postcode'>
                <FontAwesomeIcon icon='house-chimney' className='mr-1 text-primary' /> Postcode
              </label>

              <input
                type='text'
                id='postcode'
                className={clsx(
                  'input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30',
                  {'border-red-500': errors.postcode && touched.postcode},
                  {'border-green-500': !errors.postcode && touched.postcode}
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postcode}
              />

              <span role='alert' className='input-error'>
                {touched.postcode && errors.postcode && <>{errors.postcode}</>}
              </span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='postcode'>
                <FontAwesomeIcon icon='wrench' className='mr-1 text-primary' /> What services are
                you interested in?
              </label>
              <br />
              <span className='text-tone-contrast-30 whitespace-pre-line leading-normal'>
                Please select the services you’re interested in offering your customers
              </span>

              <div className='mt-3'>
                <button
                  id='pay_later'
                  name='pay_later'
                  role='button'
                  className='border border-black rounded-full px-5 md:px-3 py-2 text-n2'
                  onClick={() => {
                    values.pay_later === 'true'
                      ? (values.pay_later = 'false')
                      : (values.pay_later = 'true')

                    setPayLater(payLater === 'true' ? 'false' : 'true')
                  }}
                  onBlur={handleBlur}>
                  PayLater
                  <FontAwesomeIcon className='ml-2' icon={payLater === 'true' ? 'minus' : 'plus'} />
                </button>

                <button
                  id='pay_now'
                  className='border border-black rounded-full px-5 md:px-3 py-2 text-n2 ml-2'
                  onClick={() => {
                    values.pay_now === 'true'
                      ? (values.pay_now = 'false')
                      : (values.pay_now = 'true')

                    setPaynow(payNow === 'true' ? 'false' : 'true')
                  }}
                  onBlur={handleBlur}>
                  PayNow
                  <FontAwesomeIcon className='ml-2' icon={payNow === 'true' ? 'minus' : 'plus'} />
                </button>
              </div>

              <span role='alert' className='input-error'>
                {touched.pay_now && errors.pay_now && <>{errors.pay_now}</>}
              </span>
            </div>
          </div>

          <div className='mt-2 mb-3'>
            <button
              type='submit'
              data-tip='true'
              data-for='Register'
              onClick={() => handleSubmit()}
              className='group border rounded-full disabled:pointer-events-none disabled:cursor-not-allowed pointer-events-auto cursor-pointer py-3 px-1.5 bg-accent border-tone-contrast w-full'>
              <p className='text-n0 whitespace-pre-line font-text font-content leading-content text-primary-content text-accent-content  group-hover:text-reverse  flex justify-center items-center flex-row '>
                Register
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fal'
                  data-icon='arrow-right-long'
                  className='svg-inline--fa fa-arrow-right-long fa-1x text-primary-content ml-0.5 text-accent-content  group-hover:text-reverse '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'>
                  <path
                    fill='currentColor'
                    d='M363.3 100.7l144 144C510.4 247.8 512 251.9 512 255.1s-1.562 8.188-4.688 11.31l-144 144c-6.25 6.25-16.38 6.25-22.62 0s-6.25-16.38 0-22.62l116.7-116.7H16c-8.844 0-16-7.156-16-15.1c0-8.844 7.156-16 16-16h441.4l-116.7-116.7c-6.25-6.25-6.25-16.38 0-22.62S357.1 94.44 363.3 100.7z'></path>
                </svg>
              </p>
            </button>
          </div>
          <p className='text-n0 whitespace-pre-line font-text font-content leading-content text-primary-content text-center'>
            Already registered?{' '}
            <Link to='/partner/home' className='hover:underline text-secondary-accent undefined'>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default PartnerRegFormComponent
