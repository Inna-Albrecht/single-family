const Hero = () => {
  return (
    <main className='bg-dark text-white'>
      <header className='container py-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='m-0'>Logo</h1>
          <p className='m-0'>Tel</p>
        </div>
      </header>
      <article className='container text-center py-5'>
        <h2 className='fs-1'>We Buy ANY Condition Houses.</h2>
        <h2 className='fs-1'>Tell Us About Your Property – Quick, Easy & Free!</h2>
        <p className=''>
          We'll Buy Your House Regardless of Condition, Age, Size Or Reason For
          Selling! AVOID Foreclosure. No Realtor Fees or Closing Costs! Sell
          Your Home 'As Is' - Close Quickly (7-30 Days). No Waiting. We'll Make
          You An Offer Now.
        </p>
        <p>
          <strong>*NOTE: </strong>
          You must be the current property owner or inheriting it. We do not buy
          homes under contract or from wholesalers
        </p>
        <div className='d-flex justify-content-center gap-5 pt-4'>
          <button className='btn btn-success btn-lg rounded-pill'>
            Get a Cash Offer
          </button>
          <button className='btn btn-success btn-lg rounded-pill'>
            Call Now (999) 999-9999
          </button>
        </div>
      </article>
    </main>
  )
}

export default Hero
