import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const[name, setNewname] = useState("")
  const[category, setCategory] = useState("produce")

 
function handleNameInput(event){

  setNewname(event.target.value);
     }
  
     function handleCategoryInput(event){

      setCategory(event.target.value);
         }

         function handleSubmit(event) {
          event.preventDefault();
          onItemFormSubmit({
            id:uuid(),
            name,
            category,
          });  
          console.log(name);
         
        }

        return (
          <form className="NewItem" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" onChange={handleNameInput} value={name}/>
            </label>
      
            <label>
              Category:
              <select name="category" value={category} onChange={handleCategoryInput}>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
              </select>
            </label>
      
            <button type="submit" >Add to List</button>
          </form>
        );
      }



  

export default ItemForm;
