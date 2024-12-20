<h2 className="text-4xl font-bold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item, index) => (
            <div
            key={index}
            className="flex justify-between items-center border rounded-md p-4"
            >
              <div>
                <p className="text-lg font-medium">{item.product}</p>
                <p className="text-gray-500 text-sm">
                  {item.productManufacturer}
                </p>
                <p className="text-lg font-semibold">{item.productPrice}</p>
              </div>
              <div>
                <img
                  src={item.prductImg}
                  alt={item.product}
                  className="h-16 w-40 object-cover"
                  />
              </div>
            </div>
          ))}
          <button
            className="mt-4 p-2 bg-red-500 text-white rounded"
            onClick={clearCart}
            >
            Clear Cart
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}