export const NavButton = ({ Icon }) => {
  return (
    <>
      <Link href="/">
        <a class="inline-block p-3 text-white bg-indigo-600 border-2 border-indigo-600 rounded-full hover:animate-pulse focus:outline-none focus:ring hover:animate-bounce">
          {/* <FiHome size={28} / */}
          <Icon />
        </a>
      </Link>
    </>
  );
};
