interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const entries = Object.entries(await searchParams);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Products</h1>
      {entries.length > 0 && (
        <ul className="mt-4 list-disc pl-6">
          {entries.map(([key, value]) => (
            <li key={key}>
              {key}: {Array.isArray(value) ? value.join(", ") : value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
