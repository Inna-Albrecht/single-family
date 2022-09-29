export default function HouseCondition () {
  return (
    <section className='container py-5 text-center'>
      <h2 className='fs-1 fw-bold'>What Is Your House Condition?</h2>
      <div className='row py-5'>
        <article className='col-12 col-md-4 d-inline-flex flex-column justify-content-between'>
          <div className='divider'>
            <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 py-3'>
              Good Condition
            </button>
            <figure className='mt-3'>
              <img className='img-fluid' src='./assets/pic1.jpg' alt='' />
            </figure>
            <ul className='text-start'>
              <li>Total floor area enlarges more than 30%</li>
              <li>No or less damage in house elements</li>
              <li>Adequate natural lighting</li>
            </ul>
          </div>
          <div>
            <button className='btn btn-success rounded-pill fw-bold px-5 py-2'>Select</button>
          </div>
        </article>
        <article className='col-12 col-md-4 d-inline-flex flex-column justify-content-between'>
          <div className='divider'>
            <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 py-3'>
              Medium Condition
            </button>
            <figure className='mt-3'>
              <img className='img-fluid' src='./assets/pic5.jpg' alt='' />
            </figure>
            <ul className='text-start'>
              <li>
                Total floor area shrinks between 9% - 0% or enlarges up to 30%
              </li>
              <li>Some damages in house elements</li>
              <li>Minimal insufficient of natural lighting</li>
            </ul>
          </div>
          <div>
            <button className='btn btn-success rounded-pill fw-bold px-5 py-2'>Select</button>
          </div>
        </article>
        <article className='col-12 col-md-4 d-inline-flex flex-column justify-content-between'>
          <div className='divider'>
            <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 py-3'>
              Bad Condition
            </button>
            <figure className='mt-3'>
              <img className='img-fluid' src='./assets/pic6.jpg' alt='' />
            </figure>
            <ul className='text-start'>
              <li>Total floor area shrinks more than 9%</li>
              <li>Major damages in house elements</li>
              <li>Insufficient of natural lighting</li>
            </ul>
          </div>
          <div>
            <button className='btn btn-success rounded-pill fw-bold px-5 py-2'>Select</button>
          </div>
        </article>
      </div>
      <p className='fs-4'>Don't you know your House Condition?</p>
      <button className='btn btn-dark btn-lg btn-lg-mod fs-1 fw-bold'>
        Call Now
      </button>
    </section>
  )
}
