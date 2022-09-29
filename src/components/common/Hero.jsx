const Hero = () => {
  return (
    <main className='hero apply-bg text-white'>
      <header className='container py-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='m-0'>
            <img width={320} src='./assets/logo.png' alt='' />
          </h1>
          <button className='call-now fw-bold'>
            <img className='me-3' width={40} src='./assets/phone.png' alt='' />
            Call Now For a Cash Offer
          </button>
        </div>
      </header>
      <article className='container text-center py-5'>
        <h2 className='fs-1 fw-bold'>We Buy ANY Condition Houses.</h2>
        <h2 className='fs-1 fw-bold'>
          Tell Us About Your Property – Quick, Easy & Free!
        </h2>
        <p className='m-0 mt-4'>
          We'll Buy Your House Regardless of Condition, Age, Size Or Reason For
          Selling! AVOID <br /> Foreclosure. No Realtor Fees or Closing Costs!
          Sell Your Home 'As Is' - Close Quickly (7-30 Days).
        </p>
        <p className='mb-4'> No Waiting. We'll Make You An Offer Now.</p>
        <p>
          <strong>*NOTE: </strong>
          You must be the current property owner or inheriting it. We do not buy
          homes under contract or from wholesalers
        </p>
        <div className='d-flex justify-content-center gap-5 pt-4'>
          <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 py-3'>
            Get a Cash Offer
          </button>
          <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 py-3'>
            Call Now (999) 999-9999
          </button>
        </div>
      </article>
    </main>
  )
}

export default Hero
