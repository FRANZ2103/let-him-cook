export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full h-12 p-4  border-t border-gray-500  shadow-sm flex items-center justify-center p-6 bg-neutral-900 dark:bg-[#19191C]  ">
      <span className="text-xs md:text-sm text-body sm:text-center text-gray-400 text-center dark:text-[#FF6B6B] px-4">
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/franz-sundiam/"
          className="rounded-sm px-1 transition-colors duration-300 hover:bg-[#dcf763] hover:text-[#19191C]"
        >
          Ferdinand Francis Sundiam
        </a>
      </span>
    </footer>
  );
}
