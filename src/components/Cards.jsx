function Cards({ items }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 ">
          <figure>
            <img src={items.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {items.name}
              <div className="badge badge-secondary">{items.category}</div>
            </h2>
            <p>{items.title}</p>
            <div className="card-actions   justify-between">
              <div className="badge badge-outline">${items.price}</div>
              <div
                className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500
              hover:text-white  duration-200 cursor-pointer
              "
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
