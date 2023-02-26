import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemData, setItemData] = useState({
    name: '',
    category: 'Produce'
  })

  function handleItemData(event){
    const name = event.target.name

    setItemData({
      ...itemData,
      [name]: event.target.value
  })
  }

  return (
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(e, {...itemData, id: uuid()})}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemData} value={itemData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemData} value={itemData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
