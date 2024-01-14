'use client'
import React from 'react'
import {Card,CardBody, CardHeader, CardFooter, Image,Button} from "@nextui-org/react";
import ProductSize from './ProductSize';

  
export default function CardCombo() {
  return (
    <div className="flex w-full justify-center item-center">
    <Card className="py-4 mt-20 lg:w-3/4 xl:w-1/2">
          <CardBody className="overflow-visible py-2">
            <div className="flex gap-6">
              <Image
                alt="Shoe"
                className="flex-1 object-cover"
                src="/images/shoe.webp"
                width={"100"}
                height={"100"}
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold uppercase">
                  Nike Adapt BB 2.0
                </h2>
                <p className="text-sm text-default-500">
                  Consistent, customized fit, game-changing.
                </p>

                <div className="mb-6 mt-2 flex gap-3">
                  <span className="font-bold">$279.79</span>
                  <span className="text-default-600 line-through">$350</span>
                  <span className="text-success">20% off</span>
                </div>

                <ProductSize/>

                <div className="mt-6 flex gap-6">
                  <Button color="primary">Buy now</Button>
                  <Button color="primary" variant="bordered" radius="full">
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
    </div>
  )
}
