import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { id: 1, title: "Product 1", description: "Stylo girls", price: "$10", image: "/sunglasses1.jpg" },
    { id: 2, title: "Product 2", description: "varientsOfGoogles", price: "$20", image: "/sunglasses2.jpg" },
    { id: 3, title: "Product 3", description: "Fancy sun glasses", price: "$30", image: "/sunglasses3.jpg" },
    { id: 4, title: "Product 4", description: "simple + stylish", price: "$40", image: "/sunglasses4.jpg" },
    { id: 5, title: "Product 5", description: "Stylo boys", price: "$50", image: "/sunglasses5.jpg" },
    { id: 6, title: "Product 6", description: "pinkish", price: "$60", image: "/sunglasses6 .jpg" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className=" bg-orange-200 bg-text-2xl font-bold text-center mb-8">Responsive Product Cards</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center bg-black">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
