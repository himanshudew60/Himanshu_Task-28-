import React from 'react'
import { useOutletContext } from "react-router-dom";
function Dashboard() {
   const { appItem, addCartItem } = useOutletContext();
  return (
    
    <div className="border max-h-full gap-10 p-10 overflow-auto w-full grid grid-cols-3 place-items-center">
          {appItem.map((item) => (
            <div key={item.id} className="w-60 h-100 rounded-2xl">
              <img
                className="rounded-t-2xl h-60 w-full object-cover"
                src={item.image}
                alt={item.name}
              />

              <div className="rounded-b-2xl bg-amber-200 h-40 w-full flex flex-col justify-between items-start gap-2 p-4">
                <p className="font-semibold">{item.name}</p>

                <p className="text-gray-500 font-semibold text-xl">
                  ${item.price}
                </p>

                <button
                  onClick={() => addCartItem(item)}
                  className="border py-1 px-4 rounded-3xl hover:bg-black hover:text-white transition-transform duration-300 ease-in"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Dashboard
