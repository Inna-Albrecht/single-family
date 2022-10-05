import scrollToBottom from "./ScrollToBottom"
export default function GetCash() {
  return (
    <section className='apply-bg apply-bg-2 text-white text-center py-5'>
      <div className='container py-5'>
        <h2 className='fs-1 fw-bold'>
          Want a fast, fair, No-hassle <br /> Offer on your House?
        </h2>
        <p className='my-5'>
            Need to sell quickly or just don't want the cost and delays of putting your house</p>
          <p className="my-6">
        
          on the market and having strangers in and out of your house, possibly for months? <strong className="clickable" onClick={scrollToBottom}>We can help!</strong>
         </p>
        <a href="tel:+19727790980">
          <button className='btn btn-success btn-lg btn-md-mod fs-4 fw-bold' >
            Get my Cash Offer Now!
          </button>
        </a>
      </div>
    </section>
  )
}
