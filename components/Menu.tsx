
export default function Menu() {
  return (
      <div className="shadow-xl card card-compact w-96 bg-base-100">
          <figure>
              <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
              />
          </figure>
          <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                  <button className="btn btn-primary">Buy Now</button>
              </div>
          </div>
      </div>
  );
}
