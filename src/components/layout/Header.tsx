const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search here..."
          className="bg-white rounded-2xl px-4 py-3 outline-none"
        />

        <div className="bg-white rounded-2xl px-4 py-2">Mustiq</div>
      </div>
    </header>
  );
};

export default Header;
