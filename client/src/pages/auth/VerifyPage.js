export default function VerifyPage() {
    return (
        <div>
        <div id="revue-embed" className="mb-4">
          <form action="https://www.getrevue.co/profile/flowbite/add_subscriber" method="post" id="revue-form" name="revue-form" className="flex max-w-xl md:mx-auto">
            <div className="w-full">
              <label htmlFor="member_email" className="hidden">Email address</label>
              <div className="relative h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input type="email" id="member_email" name="member[email]" className="block w-full px-3 py-4 pl-10 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl revue-form-field focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="revue-form-actions">
              <input type="submit" name="member[subscribe]" id="member_submit" className="w-full px-4 py-4 text-base font-semibold text-center text-white bg-blue-600 border border-blue-600 cursor-pointer rounded-r-xl formkit-submit hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" defaultValue="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    );
}