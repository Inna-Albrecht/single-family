import scrollToBottom from "./ScrollToBottom"

export default function TrustAndChoose () {
  return (
    <section className='container text-center py-5'>
      <h2 className='fs-1 fw-bold'>
        Why You Should Trust <br /> and Choose Us
      </h2>
      <div className='row align-items-center py-5'>
        <aside className='col-12 col-md-7'>
          <div className='row gy-4'>
            <article className='col-12 col-md-6'>
              <figure>
                <img loading='lazy' width={80} src='./assets/webp/check.webp' alt='' />
              </figure>
              <h5 className='fw-bold'>The First Offer’s the Best</h5>
              <p className='px-3'>
                We won’t waste your time with lowball offers. We give you the
                best price right off the bat. Plus we can do this 100%
                virtually!
              </p>
            </article>
            <article className='col-12 col-md-6'>
              <figure>
                <img loading='lazy' width={80} src='./assets/webp/check.webp' alt='' />
              </figure>
              <h5 className='fw-bold'>We Pay All Cash, As-Is</h5>
              <p className='px-3'>
               No banks, no inspections, no contingencies.
              </p>
            </article>
            <article className='col-12 col-md-6'>
              <figure>
                <img loading='lazy' width={80} src='./assets/webp/check.webp' alt='' />
              </figure>
              <h5 className='fw-bold'>Experience</h5>
              <p className='px-3'>
               We've helped so many families by this point that we've lost count. Join our success stories!
              </p>
            </article>
            <article className='col-12 col-md-6'>
              <figure>
                <img loading='lazy' width={80} src='./assets/webp/check.webp' alt='' />
              </figure>
              <h5 className='fw-bold'>Fair Offer, Satisfied Clients</h5>
              <p className='px-3'>
                Our analytics and client testimonials show us that we're solving their problems and making them happy!
              </p>
            </article>
          </div>
        </aside>
        <aside className='col-12 col-md-5'>
          <figure>
            <img loading='lazy' className='img-fluid' src='./assets/webp/picOld.webp' alt='' />
          </figure>
        </aside>
      </div>
      <button className='btn btn-success btn-lg btn-md-mod fs-2 fw-bold' onClick={scrollToBottom}>
        Get an Offer!
      </button>
    </section>
  )
}
