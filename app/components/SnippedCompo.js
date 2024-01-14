'use client'
import React from 'react'
import {Snippet} from "@nextui-org/react";

  
export default function SnippedCompo() {
   return (
  
    <div className="flex flex-col gap-4 w-1/2 mx-auto">
    <p className="mr-auto text-[22px] font-[300]">Code Snipped :</p>
    <div className=" gap-4">
      <Snippet size="sm">npm install @nextui-org/react</Snippet>
      <Snippet size="md">npm install @nextui-org/react</Snippet>
      <Snippet size="lg">npm install @nextui-org/react</Snippet>
    </div>  
  </div>

  )
}
