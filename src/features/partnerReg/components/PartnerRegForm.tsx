// React Imports
import React from 'react'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {object, string} from 'yup'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'

export const PartnerRegForm = () => {
  const navigate = useNavigate()

  const initialValues = {
    name: '',
    company: '',
    mobile_phone: '',
    email_address: '',
    postCode: '',
    pay_later: '',
    pay_now: '',
  }

  const partnerRegSchema = object().shape({
    name: string().required(),
    company: string().required(),
    mobile_phone: string().required(),
    email_address: string().required(),
    postCode: string().required(),
    pay_later: string().required(),
    pay_now: string().required(),
  })

  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => console.log(values),
    validationSchema: partnerRegSchema,
  })

  return (
    <main className='container-fluid bg-secondary'>
      <div className='px-1 lg:px-0.5 container mx-auto max-w-3xl pt-6 md:pt-24 pb-4 flex flex-col justify-center text-left h-fit'>
        <button className='text-left mt-12' onClick={() => navigate(-1)}>
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

        <div className='bg-card-primary px-5 py-1.5 md:p-10 border border-tone-contrast bg-reverse rounded-3xl p-1 justify-center text-left'>
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
                id='name'
                className='input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30'
              />

              <span
                role='alert'
                className='text-n-3 whitespace-pre-line font-text font-content leading-content text-error h-1 ml-1 mt-0.5'></span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='name'>
                <FontAwesomeIcon icon='building' className='mr-1 text-primary' /> Company
              </label>

              <input
                id='company'
                className='input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30'
              />

              <span
                role='alert'
                className='text-n-3 whitespace-pre-line font-text font-content leading-content text-error h-1 ml-1 mt-0.5'></span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='mobile'>
                <FontAwesomeIcon icon='mobile' className='mr-1 text-primary' /> Mobile phone number
              </label>

              <input
                id='mobile'
                className='input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30'
              />

              <span
                role='alert'
                className='text-n-3 whitespace-pre-line font-text font-content leading-content text-error h-1 ml-1 mt-0.5'></span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='email'>
                <FontAwesomeIcon icon='envelope' className='mr-1 text-primary' /> EMail address
              </label>

              <input
                id='email'
                className='input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30'
              />

              <span
                role='alert'
                className='text-n-3 whitespace-pre-line font-text font-content leading-content text-error h-1 ml-1 mt-0.5'></span>
            </div>

            <div className='mb-1 mt-0.5'>
              <label className='text-n0 font-bold' htmlFor='postCode'>
                <FontAwesomeIcon icon='house-chimney' className='mr-1 text-primary' /> Postcode
              </label>

              <input
                id='postCode'
                className='input hover:shadow-hover focus-within:shadow-focus font-text border-error placeholder-tone-contrast-30'
              />

              <span
                role='alert'
                className='text-n-3 whitespace-pre-line font-text font-content leading-content text-error h-1 ml-1 mt-0.5'></span>
            </div>
          </div>

          <div className='mt-2 mb-1.5'>
            <button
              data-tip='true'
              data-for='Register'
              onClick={() => handleSubmit()}
              className='group border rounded-full disabled:pointer-events-none disabled:cursor-not-allowed pointer-events-auto cursor-pointer py-0.5 px-1.5 bg-accent border-tone-contrast w-full'>
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
            <span className='hover:underline text-secondary-accent undefined'>
              <a href='https://www.bumper.co.uk/login'>Login</a>
            </span>
          </p>
        </div>
      </div>
    </main>
  )
}

export default PartnerRegForm
