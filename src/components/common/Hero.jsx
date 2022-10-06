import scrollToBottom from "./ScrollToBottom"
const Hero = () => {
  return (
    <main className='hero apply-bg apply-bg-1 text-white'>
      <header className='container py-4'>
        <div className='d-flex align-items-center hero-header'>
          <h1 className='m-0'>
            <img width={320} src='./assets/webp/logo.webp' alt='' />
          </h1>
          <a href="tel:+19727790980">
            <button className='call-now fw-bold'>

              <img className='me-3' width={40} src='./assets/webp/phone.webp' alt='' />
              Call Now For a Cash Offer

            </button>
          </a>

        </div>
      </header>
      <article className='container text-center py-5'>
        <h2 className='fs-1 fw-bold'>SELL YOUR HOUSE NOW! <b />
          We buy houses in ANY Condition</h2>
        <h2 className='fs-1 fw-bold'>
          Start today - Quick and Easy
        </h2>
        <p className='m-0 mt-4'>
          We want to help homeowners sell their property without the hassle that comes with <br />
          showings, repairs, or the uncertainty of the housing market. We want to offer you a better way.
        </p>
        <p>
          <strong>
            You must be the current property owner or inheriting it. We do not buy
            homes under contract or from wholesalers.</strong>
        </p>
        <div className='d-flex flex-wrap justify-content-center gap-5 pt-4'>
          <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 py-3' onClick={scrollToBottom}>
            Get a Cash Offer
          </button>
          <a href="tel:+19727790980">
            <button className='btn btn-success btn-lg rounded-pill fw-bold px-5 py-3'>
              Talk with an Agent
            </button>
          </a>
        </div>
      </article>
    </main>
  )
}

export default Hero
