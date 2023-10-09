"use client"
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            {/* Footer container */}
            <footer className="bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-white lg:text-left">
                <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Social network icons container */}
                    <div className="flex justify-center">
                        <Link href="#!" className="mr-6 text-gray-900 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            Facebook
                        </Link>
                        <Link href="#!" className="mr-6 text-gray-900 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                            Twitter
                        </Link>
                        <Link href="#!" className="mr-6 text-gray-900 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Instagram
                        </Link>
                        <Link href="#!" className="mr-6 text-gray-900 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Pinterest
                        </Link>
                        <Link href="#!" className="text-gray-900 dark:text-white">
                            
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            LinkedIn
                        </Link>
                    </div>
                    {/* Social network icons container end */}
                </div>
                {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Tailwind Elements section */}
                        <div className="">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-4 w-4"
                                >
                                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                                </svg>
                                Tailwind Elements
                            </h6>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                A collection of HTML and CSS elements styled with
                                <strong> Tailwind CSS</strong>.
                            </div>
                        </div>
                        {/* Products section */}
                        <div className="">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-4 w-4"
                                >
                                    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239 0-2.239 0L14 14H5c-.553 0-1-.447-1-1s.447-1 1-1h6c.553 0 1 .447 1 1s-.447 1-1 1H7c-.553 0-1 .447-1 1s.447 1 1 1h5a.995.995 0 01.707-.293l4 4A.997.997 0 0014 20a.997.997 0 00.707-.293l4-4A.993.993 0 0019 15h-4c-.553 0-1-.447-1-1s.447-1 1-1h6c.553 0 1-.447 1-1s-.447-1-1-1z" />
                                </svg>
                                Products
                            </h6>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Explore our range of high-quality products and services.
                            </div>
                        </div>
                        {/* Useful links section */}
                        <div className="">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-4 w-4"
                                >
                                    <path d="M21 4H11c-1.104 0-2 .896-2 2s.896 2 2 2h6l-6 6-1.293-1.293a.999.999 0 10-1.414 1.414L14.586 15L9.293 20.293a.997.997 0 000 1.414a.999.999 0 001.414 0L16 16.414L17.707 18.12a.999.999 0 001.414 0c.39-.391.39-1.023 0-1.414L15.414 14L20 9h1c1.104 0 2-.896 2-2s-.896-2-2-2z" />
                                </svg>
                                Useful Links
                            </h6>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Find helpful resources and information.
                            </div>
                        </div>
                        {/* Contact section */}
                        <div className="">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-4 w-4"
                                >
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8s8 3.582 8 8s-3.582 8-8 8zm-.408-7.586c-.195-.195-.451-.293-.707-.293s-.512.098-.707.293L9 12.586L7.707 11.293a.999.999 0 10-1.414 1.414L7.586 14l-1.293 1.293a.999.999 0 101.414 1.414L9 15.414l1.293 1.293a.999.999 0 101.414-1.414L10.414 14l1.292-1.292a.999.999 0 000-1.414z" />
                                </svg>
                                Contact
                            </h6>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Get in touch with us for any questions or inquiries.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main container div end */}
            </footer>
            {/* Footer container end */}
        </>
    );
}
