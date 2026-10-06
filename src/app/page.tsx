import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/products/shoes", label: "Category example (shoes)" },
  { href: "/products/shoes/42", label: "Product example (shoes / 42)" },
  { href: "/users", label: "Users" },
  { href: "/users/1", label: "User detail example (1)" },
  { href: "/users/1/photos", label: "User photos example" },
  { href: "/users/1/photos/7", label: "Single photo example" },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-4 text-3xl font-bold">Next.js Routing Practice</h1>
      <p className="mb-4">Examples of static, dynamic, and nested routes:</p>
      <nav>
        <ul className="list-disc pl-6 space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="text-blue-600 underline" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
