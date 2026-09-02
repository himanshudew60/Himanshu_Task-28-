import React from 'react'

function Payment() {
  return (
   <div className="border max-h-full gap-10 p-10 overflow-auto w-full  flex justify-center items-center">

      <div className="w-96 border rounded-2xl shadow-lg p-8">

        <h1 className="text-2xl font-bold mb-6">
          Payment
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Card Number"
            className="border rounded-lg p-3"
          />

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="MM/YY"
              className="border rounded-lg p-3 w-1/2"
            />

            <input
              type="text"
              placeholder="CVV"
              className="border rounded-lg p-3 w-1/2"
            />

          </div>

          <input
            type="text"
            placeholder="Card Holder Name"
            className="border rounded-lg p-3"
          />

          <button className="bg-black text-white rounded-lg py-3 mt-2 hover:bg-gray-800">
            Pay Now
          </button>

        </div>

      </div>

    </div>

  )
}

export default Payment
