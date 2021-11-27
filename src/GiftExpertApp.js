import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {
  
  const [categories, setCategories] = useState([]);
  
  return (
    <>
      <h2>Gift expert app</h2>
        <AddCategory setCategories={setCategories} />
      <hr />      
      <div >
        {
          categories.map((category => {
            return (
              <GiftGrid key={category} category={category} />
            );
          }))
        }
      </div>
    </>
  );
};

export default GiftExpertApp;
