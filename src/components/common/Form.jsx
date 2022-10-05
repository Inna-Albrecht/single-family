import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {

  const [state, handleSubmit] = useForm('xzbwggwn')
    if (state.succeeded) {
      return 
    }

    return (
      <section className='container py-5 text-center'>
        <h2 className='fs-1 fw-bold mb-3'>Want us to contact you?</h2>
        <form className='w-75 mx-auto' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              className='form-control form-control-lg'
              type='text'
              id="fullname"
              name="fullname"
              placeholder='Full name'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className='form-control form-control-lg'
              type='text'
              id="fullname"
              name="address"
              placeholder='Address'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className='form-control form-control-lg'
              type='number'
              id="phonenumber"
              name="phone"
              placeholder='Cell phone'
              pattern ="[0-9]"
              onKeyDown={(evt, key) => { console.log((evt.code=='KeyE') ? evt.preventDefault() : 2 )
            inputRef.current.value= "";
            }
            } //Wrap as a function alert('Only numbers allowed in this field')
              required
            />
          </div>

          <div className="mb-4">
            <input type="checkbox" value="yes" required />Do you consent to receive text messages from us?
          </div>
          <div className='w-100'>
            <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 fs-4' >
              Submit
            </button>
          </div>

        </form>
      </section>
    )
}
