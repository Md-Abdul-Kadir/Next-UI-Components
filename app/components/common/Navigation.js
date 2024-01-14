import React from 'react'
import { Link } from 'next/link';


export default function Navigation() {
  return (
    <div className="py-6">
    <div className="container flex items-center justify-between">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}
