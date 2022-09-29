export default function CardItem() {
  return (
    <>
      <div className="card">
        <div className="top">
          <div className="left">
            <img src="./images/BTC.png" alt="" />
            <h2>BTC</h2>
          </div>
          <img src="./images/visa.png" className="right" alt="" />
        </div>
        <div className="middle">
          <h1>$123,233</h1>
          <img src="./images/card chip.png" className="chip" alt="" />
        </div>
        <div className="bottom">
          <div className="left">
            <small>Card Holder</small>
            <h5>JOHN DOE</h5>
          </div>
          <div className="right">
            <div className="expiry">
              <small>Expiry</small>
              <h5>07/28</h5>
            </div>
            <div className="cvv">
              <small>CVV</small>
              <h5>111</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
