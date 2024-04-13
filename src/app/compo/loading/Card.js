
export default function Card() {
  return (
    
    <div className="bg-grey rounded-lg shadow-md w-full h-full">
  <div className="flex items-center px-4 py-3 border-b">
    <div className="rounded-full bg-gray-400 h-10 w-10 animate-pulse"></div>
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-gray-400 rounded w-3/4 animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6 animate-pulse"></div>
      </div>
    </div>
  </div>
  <div className="px-4 py-2">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-gray-400 h-10 w-10"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-evenly py-2 border-t">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-gray-400 h-10 w-10"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>


  )
}
