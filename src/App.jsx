import { useState } from "react";
import "./App.css";
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function App() {
  const [cartItem, setCartItem] = useState([]);

  const appItem = [
    {
      id: 1,
      name: "White Casual Sneaker",
      price: 70,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 85,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500",
    },
    {
      id: 3,
      name: "Black Sports Shoes",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
    },
    {
      id: 4,
      name: "Classic Leather Shoes",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1614252235316-8c857d5c9b5b?w=500",
    },
    {
      id: 5,
      name: "Blue Casual Shoes",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    },
    {
      id: 6,
      name: "White Running Shoes",
      price: 90,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    },
    {
      id: 7,
      name: "Black Sneakers",
      price: 80,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500",
    },
    {
      id: 8,
      name: "Daily Walking Shoes",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500",
    },
    {
      id: 9,
      name: "High Top Sneakers",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=500",
    },
    {
      id: 10,
      name: "Grey Training Shoes",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500",
    },
  ];

  function addCartItem(item) {
    const existingItem = cartItem.find((cart) => cart.id === item.id);

    if (existingItem) {
      setCartItem(
        cartItem.map((cart) =>
          cart.id === item.id ? { ...cart, qty: cart.qty + 1 } : cart,
        ),
      );
    } else {
      setCartItem([...cartItem, { ...item, qty: 1 }]);
    }
  }

  function increaseQty(id) {
    setCartItem(
      cartItem.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }

  function decreaseQty(id) {
    setCartItem(
      cartItem
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  }

  const total = cartItem.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="h-screen">
      <div className="h-20 border-b border-gray-300 flex justify-start items-center pl-16 shadow-xl">
        <img
          className="h-15 w-15 rounded-full border-2 mr-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNRpuvUYzIfp-tsF1Wk863--GBvzF1rNVZTJ7U8DGBQ&s=10"
          alt=""
        />

        <ul className="flex justify-center items-center gap-10 text-gray-500 font-bold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </div>

      <div className="w-full h-[calc(100vh-80px)] flex">
       <Outlet
       context={{
              appItem,
              addCartItem,
            }}
       />

        <div className="w-160  border-red-500 border-2">
          <div className="h-20 border flex justify-start items-center p-10">
            <p className="text-xl font-bold">Cart ({cartItem.length})</p>
          </div>

          <div className="border h-80 overflow-auto p-4">
            {cartItem.length === 0 ? (
              <div className="h-full flex justify-center items-center">
                <p className="text-gray-500">Cart is empty</p>
              </div>
            ) : (
              cartItem.map((item) => (
                <div
                  key={item.id}
                  className="border-b py-4 flex items-center gap-4"
                >
                  <img
                    className="w-20 h-20 rounded object-cover"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>

                    <p className="text-gray-500">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="border w-8 h-8 rounded-full"
                      >
                        -
                      </button>

                      <p>{item.qty}</p>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="border w-8 h-8 rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <p className="font-semibold">${item.price * item.qty}</p>
                </div>
              ))
            )}
          </div>
          <div className="h-10 flex justify-between items-center px-6">
            <p className="text-xl font-bold">Total</p>

            <p className="text-xl font-bold">${total}</p>
          </div>
          <div className="flex justify-center items-center ">
            <NavLink to='/payment'><button class="rounded-3xl bg-yellow-200 py-1 px-4">Proceed to Payment</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
