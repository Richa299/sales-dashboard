import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;

  company: {
    name: string;
  };

  address: {
    city: string;
  };
};
const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const cities = [...new Set(users.map((user: any) => user.address.city))];

  const filteredUsers = users
    .filter((user: any) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText);

      const matchesCity =
        selectedCity === "" || user.address.city === selectedCity;

      return matchesSearch && matchesCity;
    })
    .sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });

  if (loading) {
    return <div className="py-10 text-center">Loading...</div>;
  }
  if (filteredUsers.length === 0) {
    return <div className="py-10 text-center">No users found</div>;
  }

  if (error) {
    return <div className="py-10 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <div
        className="
    flex
    items-center
    justify-between

    mb-[28px]
  "
      >
        <div className="flex items-center gap-[16px]">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="
        h-[48px]

        px-[16px]

        rounded-[12px]
        border
        border-[#E5E7EB]

        bg-white

        text-[#151D48]

        outline-none
      "
          >
            <option value="asc">Name A-Z</option>

            <option value="desc">Name Z-A</option>
          </select>

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="
        h-[48px]

        px-[16px]

        rounded-[12px]
        border
        border-[#E5E7EB]

        bg-white

        text-[#151D48]

        outline-none
      "
          >
            <option value="">All Cities</option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
      w-[320px]
      h-[48px]

      px-[18px]

      rounded-[12px]
      border
      border-[#E5E7EB]

      bg-white

      outline-none

      text-[#151D48]
      placeholder:text-[#A3AED0]
    "
        />
      </div>
      <table
        className="
    w-full

    overflow-hidden

    rounded-[16px]
  "
      >
        {" "}
        <thead>
          <tr className="bg-[#F9FAFB]">
            {" "}
            <th
              className="
  text-left

  px-[20px]
  py-[18px]

  text-[14px]
  font-semibold

  text-[#737791]
"
            >
              Name
            </th>
            <th
              className="
  text-left

  px-[20px]
  py-[18px]

  text-[14px]
  font-semibold

  text-[#737791]
"
            >
              Email
            </th>
            <th
              className="
  text-left

  px-[20px]
  py-[18px]

  text-[14px]
  font-semibold

  text-[#737791]
"
            >
              Company
            </th>
            <th className="text-left py-4 text-[#737791] font-medium">City</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user: User) => (
            <tr
              key={user.id}
              className="
              border-b
              border-[#F8F9FA]

              hover:bg-[#F9FAFB]
            "
            >
              <td
                className="
  px-[20px]
  py-[18px]

  text-[15px]

  border-b
  border-[#F5F5F7]
"
              >
                {user.name}
              </td>

              <td
                className="
  px-[20px]
  py-[18px]

  text-[15px]

  border-b
  border-[#F5F5F7]
"
              >
                {user.email}
              </td>

              <td
                className="
  px-[20px]
  py-[18px]

  text-[15px]

  border-b
  border-[#F5F5F7]
"
              >
                {user.company.name}
              </td>

              <td
                className="
  px-[20px]
  py-[18px]

  text-[15px]

  border-b
  border-[#F5F5F7]
"
              >
                {user.address.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
