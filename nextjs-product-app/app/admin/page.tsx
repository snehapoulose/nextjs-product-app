import { Products } from "../types/products";

 export default async function Admin() {
    const res = await fetch('http://localhost:3000/api/products',{
        cache:"no-store",
    });
   if(!res.ok){
    throw new Error("Failed to fetch products");
}
 const product:Products[] = await res.json();
 
    return(
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            {/* <ul>
                {product.map((p)=>(
                    <li key={p.id}>
                        {p.name}
                    </li>
                ))}
            </ul> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-xl"
            />

            <div className="mt-4 flex flex-col">
              <span className="text-lg font-semibold">{p.name}</span>
              <span className="text-gray-500">{p.category}</span>
              <span className="text-green-600 font-bold mt-2">
                ${p.price}
              </span>

              {p.isNew && (
                <span className="mt-2 inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                  New Arrival
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

        </main>
    )
}




