import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
const animals = [
    {
      id: 1,
      valuee: "cat1",
    },
    {
      id: 2,
      valuee: "cat2",
    },
    {
      id: 3,
      valuee: "cat3",
    },
    {
      id: 4,
      valuee: "cat4",
    },
    {
      id: 5,
      valuee: "cat5",
    },
  ];

export default function AutoComplete() {
  const sizes = ["sm", "md", "lg"];

  return (
    <div className="w-full flex flex-col gap-4 my-20">
      {sizes.map((size) => (
        <div key={size} className="flex w-1/2 flex-wrap md:flex-nowrap mx-auto mb-6 md:mb-0 gap-4">
          <Autocomplete 
            size={size}
            defaultItems={animals}
            label="Select an animal" 
            className="max-w-xs" 
          >
            {(item) => <AutocompleteItem key={item.id}>{item.valuee}</AutocompleteItem>}
          </Autocomplete>
          <Autocomplete
            size={size}
            defaultItems={animals}
            label="Favorite Animal"
            placeholder="Search an animal"
            className="max-w-xs"
          >
            {(item) => <AutocompleteItem key={item.id}>{item.valuee}</AutocompleteItem>}
          </Autocomplete>
        </div>
      ))}  
    </div>  
  );
}
