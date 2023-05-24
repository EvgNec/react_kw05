import React from "react";


export default class App extends React.Component {
  state = {
    products: [
      { id: 1, name: "🍟", price: 8 },
      { id: 2, name: "🥤", price: 4 },
      { id: 3, name: "🍔", price: 12 },
    ],
    cart: [],
    isCartModalOpen: false,
    isAuthModalOpen: false,
  };

  
  render() {
    return (
      <div>
        <span>Text</span>
      </div>
    );
  }
}
