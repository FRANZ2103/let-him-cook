export default function Footer() {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4  border-t border-default shadow-sm md:flex md:items-center md:justify-center md:p-6 bg-neutral-900 dark:bg-[#F0EFE8] ">
      <span class="text-sm text-body sm:text-center text-gray-400 text-center dark:text-[#1a1a18]">
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/franz-sundiam/"
          class="hover:bg-stone-50 rounded-md px-1 transition-colors duration-300 hover:text-neutral-900"
        >
          Ferdinand Francis Sundiam
        </a>
      </span>
    </footer>
  );
}
