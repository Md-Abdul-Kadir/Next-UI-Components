'use client'
import React from 'react'
import {Spinner} from "@nextui-org/react";


export default function SpinnerCombo() {
  const [isInvalid, setIsInvalid] = React.useState(true);
  return (
    <div className="flex flex-col w-full my-20">
    <h3 className="mx-auto text-[30px]">Spinner :</h3>
    <div className="flex gap-4 mx-auto mt-6">
      <Spinner color="default"/>
      <Spinner color="primary"/>
      <Spinner color="secondary"/>
      <Spinner color="success"/>
      <Spinner color="warning"/>
      <Spinner color="danger"/>
    </div> 
    </div>
  )
}
