import React from 'react'
import { Button } from '@nextui-org/button';

export default function ButtonsCompo() {
  return (
    <div>
                
        {/* button grp */}
      <p className="mx-auto text-[40px] font-[300] mt-10 mb-6">Button Grp :</p>
      <div className="w-full flex flex-col">
          <div className="flex gap-4 items-center mx-auto">
            <Button radius="full">Full</Button>
            <Button radius="lg">Large</Button>
            <Button radius="md">Medium</Button>
            <Button radius="sm">Small</Button>
            <Button radius="none">None</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-10 mx-auto">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </div>
        </div>
    </div>
  )
}
