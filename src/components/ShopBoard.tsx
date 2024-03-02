"use client"
const ShopBoard = () => {
  const buttons = ["XS", "S", "M", "L", "XL", "XXL"]

  return (
    <div className="w-2/5 p-4">
      <h1 className="mt-12 mb-2 font-bold">6PM + NYLON JACKET BLACK</h1>
      <hr></hr>
      <p className="mt-2 mb-8 text-xs font-bold">99,00€</p>
      <div className="flex justify-between text-xs mb-2">
        <p>SIZE:</p>
        <p>FIND YOUR SIZE</p>
      </div>
      <div className="flex">
        {buttons.map((button, index) => (
          <button key={index} className="border-2 p-4 block w-full">{button}</button>
        ))}
      </div>
      <div className="bg-gray-200 flex text-xs font-bold justify-between mt-2 pl-8 pr-8">
        <p>Male: 187 cm | Size: M</p>
        <p>|</p>
        <p>Female: 172 cm | Size: S</p>
      </div>
      <p className="text-xs text-green-600 mt-4 mb-4">In stock. Shipping in 2 - 3 Days</p>
      <button className="h-12 w-full border-2 p-2 font-bold text-sm mb-4">ADD TO CART</button>
      <button className="h-12 w-full p-2 bg-yellow-400 text-blue-800 mb-4">Buy with PayPal</button>
      <hr></hr>
      <p className="text-4xl font-bold mt-4">6PM</p>
    </div>
  )
}

export default ShopBoard