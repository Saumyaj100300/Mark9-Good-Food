import { useState } from "react";
import "./styles.css";

var foodILove = {
  Indian: [
    {
      name: "Kadai Paneer",
      spicy: "🌶🌶",
      rating: "4.9/5",
      description: "Spicy paneer made with onion and Indian sauces"
    },
    {
      name: "Dal Makhani",
      spicy: "🌶",
      rating: "4/5",
      description: "Dal made with tadka and butter"
    },
    {
      name: "Punjabi Chhole",
      spicy: "🌶",
      rating: "4.1/5",
      description: "Chatpate chhole made with a Punjabi twist"
    }
  ],

  Chinese: [
    {
      name: "Chilly Garlic Noodles",
      spicy: "🌶🌶🌶",
      rating: "4.6/5",
      description: "Spicy Noodles made with veggies"
    },
    {
      name: "Hot and Sour Soup",
      spicy: "🌶🌶",
      rating: "4.3/5",
      description: "Hot and tasty soup "
    },
    {
      name: "Veg Manchurian Gravy",
      spicy: "🌶",
      rating: "3.9/5",
      description: "Mouth watery manchurian"
    }
  ],

  Italian: [
    {
      name: "Red Sauce Pasta",
      spicy: "🌶🌶🌶",
      rating: "4/5",
      description: "Spicy and delicious pasta"
    },
    {
      name: "Pizza",
      spicy: "🌶",
      rating: "5/5",
      description: "Pizza filled with cheese."
    },
    {
      name: "Lasagna",
      spicy: "🌶",
      rating: "4.6/5",
      description: "veg lasagna loaded with veggies"
    }
  ]
};

export default function App() {
  const [selectFood, setFood] = useState("Indian");
  function foodClickHandler(food) {
    setFood(food);
  }
  return (
    <div className="App">
      <h1>Good Food :) 🍱</h1>
      <p className="description">
        Checkout my favorite foods. Select a category to get started :
      </p>

      <div>
        {Object.keys(foodILove).map((food) => (
          <button
            className="button"
            onClick={() => foodClickHandler(food)}
            style={{
              cursor: "pointer",
              background: "#6EE7B7",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {food}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodILove[selectFood].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                background: "#D1FAE5",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div className="food-name">
                {" "}
                {food.name} {food.spicy}{" "}
              </div>
              <div className="food-rating"> {food.rating} </div>
              <div className="food-description"> {food.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
