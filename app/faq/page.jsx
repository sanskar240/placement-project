import React from 'react'
import Link from "next/link";

const FAQPage = () => {
  return (
<div className="bg-gray-800 text-white p-8 rounded-lg">
  <h3 className="text-3xl font-bold mb-4">Real-time Student Testimonials and Interview Experiences</h3>
  <p className="text-lg">Get ready with insights from our community</p>
  <Link href = '/add-faq'>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Add Yours</button>
  </Link>
</div>
  )
}

export default FAQPage;