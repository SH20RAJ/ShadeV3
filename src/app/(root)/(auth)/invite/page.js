
let Page = async () => {

  return(
          <>
 <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-6">Contact Us</h2>
  <form action="/submit_form" method="POST">
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
      <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
    </div>
    <div className="mb-6">
      <label htmlFor="msg" className="block text-sm font-medium text-gray-700">Message:</label>
      <textarea id="msg" name="msg" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required defaultValue={""} />
    </div>
    <div className="flex items-center justify-end">
      <input type="submit" defaultValue="Send Message" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer" />
    </div>
  </form>
</div>



          </>

    )

}

export default Page;