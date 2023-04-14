import Link from "next/link"

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 sm:py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Thank you!</h1>
        <p className="mt-4 text-lg">
          Your feedback has been submitted. We appreciate your time.
        </p>

          <Link href="/" className=" mt-4 text-lg text-blue-600 hover:underline">
            Return to home
          </Link>
      </div>
    </div>
  )
}