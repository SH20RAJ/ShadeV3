
export default function FeedSkeleton() {
  return (
    <div className="w-full md:w-[40%] m-2">
  <div className="flex sm:max-w-md sm:w-auto w-full mx-auto my-8">
    <div className="shadow-md w-full h-full">
      <div className="flex items-center px-4 py-3 border-b">
        <svg className="rounded-full mr-2 bg-contain w-10 h-10 animate-pulse  bg-gray-300" />
        <div>
          <a>
            <h3>
              <div
                aria-live="polite"
                aria-busy="true"
                className="w-[152px] max-w-full"
              >
                <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
                  ‌
                </span>
                <br />
              </div>
              <span>
                <div
                  aria-live="polite"
                  aria-busy="true"
                  className="w-[48px] max-w-full"
                >
                  <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
                    ‌
                  </span>
                  <br />
                </div>
              </span>
            </h3>
          </a>
          <a>
            <p />
            <div
              aria-live="polite"
              aria-busy="true"
              className="w-[192px] max-w-full"
            >
              <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
                ‌
              </span>
              <br />
            </div>
            <p />
          </a>
        </div>
      </div>
      <div className="px-4 py-2">
        <div>
          <p />
          <div
            aria-live="polite"
            aria-busy="true"
            className="w-[224px] max-w-full"
          >
            <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
              ‌
            </span>
            <br />
          </div>
          <p />
        </div>
      </div>
      <div className="flex items-center justify-evenly py-2 border-t">
        <div className="flex items-center space-x-1">
          <svg className="w-6 h-6 animate-pulse rounded bg-gray-300" />
          <span>
            <div
              aria-live="polite"
              aria-busy="true"
              className="w-[14px] max-w-full"
            >
              <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
                ‌
              </span>
              <br />
            </div>
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-6 h-6 animate-pulse rounded bg-gray-300" />
          <span>
            <div
              aria-live="polite"
              aria-busy="true"
              className="w-[14px] max-w-full"
            >
              <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
                ‌
              </span>
              <br />
            </div>
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-6 h-6 animate-pulse rounded bg-gray-300" />
          <span>
            <div
              aria-live="polite"
              aria-busy="true"
              className="w-[14px] max-w-full"
            >
              <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
                ‌
              </span>
              <br />
            </div>
          </span>
        </div>
        <div className="flex items-center space-x-1 hover:text-yellow-500">
          <svg className="w-6 h-6 animate-pulse rounded bg-gray-300" />
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-6 h-6 animate-pulse rounded bg-gray-300" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
