import Link from "next/link";

const Footer = () => {
  return (
    <footer
      data-testid="flowbite-footer"
      className="w-full bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between sm:p-24 p-6 border-0"
    >
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div>
            <Link href="/" passHref>
              <span
                data-testid="flowbite-footer-brand"
                className="mb-4 flex items-center sm:mb-0 mr-3 h-6 sm:h-9 cursor-pointer"
              >
                <img
                  alt="OneLot Logo"
                  src="https://www.onelot.ph/_next/image?url=%2Flogo1.png&w=128&q=75"
                  className="mr-3 h-8"
                />
                <span
                  data-testid="flowbite-footer-brand-span"
                  className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
                ></span>
              </span>
            </Link>
          </div>
          <div className="flex items-start">
            <div className="flex flex-col mb-5 sm:mb-0 mr-12 items-start">
              <span className="mb-2 font-bold">Company</span>
              <Link href="/" passHref>
                <span className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700">
                  Home
                </span>
              </Link>
              <Link href="/about" passHref>
                <span className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700">
                  About
                </span>
              </Link>
              <Link href="/contact" passHref>
                <span className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700">
                  Contact
                </span>
              </Link>
            </div>
            <div className="flex flex-col mb-5 sm:mb-0 items-start">
              <span className="mb-2 font-bold">Legal</span>
              <Link href="/consent" passHref>
                <span className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700">
                  Consent
                </span>
              </Link>
              <Link href="/privacy" passHref>
                <span className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700">
                  Privacy
                </span>
              </Link>
              <Link href="/terms" passHref>
                <span className="cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700">
                  Terms
                </span>
              </Link>
            </div>
          </div>
        </div>
        <hr
          data-testid="footer-divider"
          className="w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div className="flex text-start items-start mb-3">
          <span className="text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" passHref>
              <span className="cursor-pointer hover:underline">
                OneLot Technologies Incorporated Pte. Ltd
              </span>
            </Link>
            . All Rights Reserved.
          </span>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between text-start items-start">
          <span className="text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" passHref>
              <span className="cursor-pointer hover:underline">
                OneLot Financing Corporation
              </span>
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
