'use client'
import React from 'react'
import {Checkbox} from "@nextui-org/react";
import {CheckboxGroup} from "@nextui-org/react";

  
export default function Checkboxx() {
  const [isInvalid, setIsInvalid] = React.useState(true);
  return (
    <div className="flex w-full">
    <div className="flex flex-col gap-4 w-1/4 ml-auto">
    <p className="mr-auto text-[22px] font-[300]">CheckBox :</p>
    <Checkbox defaultSelected radius="full">Full</Checkbox>
    <Checkbox defaultSelected radius="lg">Large</Checkbox>
    <Checkbox defaultSelected radius="md">Medium</Checkbox>
    <Checkbox defaultSelected radius="sm">Small</Checkbox>
    <Checkbox defaultSelected radius="none">None</Checkbox>
  </div>
     <div className="flex flex-col gap-1 w-1/4 mr-auto">
     <p className="mr-auto text-[22px] font-[300]">Checkbox Group :</p>
     <CheckboxGroup
      isRequired
      description="Select the cities you want to visit"
      isInvalid={isInvalid}
      label="Select cities"
      onValueChange={(value) => {
        setIsInvalid(value.length < 1);
      }}
    >
      <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
      <Checkbox value="sydney">Sydney</Checkbox>
      <Checkbox value="san-francisco">San Francisco</Checkbox>
      <Checkbox value="london">London</Checkbox>
      <Checkbox value="tokyo">Tokyo</Checkbox>
    </CheckboxGroup>
    </div>
    </div>
  )
}
