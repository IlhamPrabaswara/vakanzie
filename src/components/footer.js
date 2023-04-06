export default function Footer() {
  return (
    <footer className="sticky top-full bg-white rounded-lg shadow mt-4 md:mt-[50px]">
      <div className="w-full mx-auto container p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Vakanzie™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
