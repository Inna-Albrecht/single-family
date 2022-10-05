export default function HouseCondition () {
  return (
    <section className='container py-5 text-center'>
      <h2 className='fs-1 fw-bold'>What condition is your house in?</h2>
      <div className='row gy-5 gy-md-0 py-5'>
        <article className='col-12 col-md-4 d-inline-flex flex-column justify-content-between'>
          <div className='divider'>
            <p className='d-inline-block text-white rounded-pill bg-condition btn-lg fw-bold px-5 py-3'>
              Mint Condition
            </p>
            <figure className='mt-4'>
              <img loading='lazy' className='img-fluid' src='./assets/webp/pic1.webp' alt='' />
            </figure>
            <ul className='text-start'>
             
            </ul>
          </div>
          <div>
            <button className='btn btn-success rounded-pill fw-bold px-5 py-2'>Select</button>
          </div>
        </article>
        <article className='col-12 col-md-4 d-inline-flex flex-column justify-content-between'>
          <div className='divider'>
            <p className='d-inline-block text-white rounded-pill bg-condition btn-lg fw-bold px-5 py-3'>
              Average Condition
            </p>
            <figure className='mt-4'>
              <img loading='lazy' className='img-fluid' src='./assets/webp/pic5.webp' alt='' />
            </figure>
            <ul className='text-start'>
              
            </ul>
          </div>
          <div>
            <button className='btn btn-success rounded-pill fw-bold px-5 py-2'>Select</button>
          </div>
        </article>
        <article className='col-12 col-md-4 d-inline-flex flex-column justify-content-between'>
          <div className='divider'>
            <p className='d-inline-block text-white bg-condition rounded-pill btn-lg fw-bold px-5 py-3'>
              Bad Shape
            </p>
            <figure className='mt-4'>
              <img loading='lazy' className='img-fluid' src='./assets/webp/pic6.webp' alt='' />
            </figure>
            <ul className='text-start'>
             
            </ul>
          </div>
          <div>
            <button className='btn btn-success rounded-pill fw-bold px-5 py-2'>Select</button>
          </div>
        </article>
      </div>
      <p className='fs-4'>Not sure of your home's condition?</p>
      <a href="tel:+19727790980">
      <button className='btn btn-dark btn-lg btn-lg-mod fs-1 fw-bold' href="tel:+19727790980">
        Call Now
      </button>
      </a>
    </section>
  )
}
