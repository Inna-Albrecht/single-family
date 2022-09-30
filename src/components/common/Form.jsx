export default function Form () {
  return (
    <section className='container py-5 text-center'>
      <h2 className='fs-1 fw-bold mb-3'>Form</h2>
      <form className='w-75 mx-auto'>
        <div className='mb-4'>
          <input
            className='form-control form-control-lg'
            type='text'
            placeholder='Full name'
            required
          />
        </div>
        <div className='mb-4'>
          <input
            className='form-control form-control-lg'
            type='text'
            placeholder='Address'
            required
          />
        </div>
        <div className='mb-4'>
          <input
            className='form-control form-control-lg'
            type='tel'
            placeholder='Cell phone'
            required
          />
        </div>
        <div className='w-100'>
          <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 fs-4'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
