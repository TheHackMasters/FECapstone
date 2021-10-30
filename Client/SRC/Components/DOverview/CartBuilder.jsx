import React, { useState, useEffect } from 'react';

function CartBuilder(props) {
  return (
    <div>
      <form>
        <label>
          Select Size
          <select>
            <option value="makeAbuilder">needs a builder</option>
          </select>
        </label>
        <label>
          Quantity
          <select>
            <option value="makeAbuilder">make default up to 10 items</option>
          </select>
        </label>
      </form>
      <span>Add a size drop down and a quantity drop down</span>
      <span>Add the add to cart functionality</span>
      <span>Add a star button that adds an item to the outfit</span>
    </div>
  );
}

export default CartBuilder;
