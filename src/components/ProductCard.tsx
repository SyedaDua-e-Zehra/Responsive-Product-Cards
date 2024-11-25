interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductCard({ title, description, price, image }: ProductCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-blue-600 font-semibold">{price}</p>
    </div>
  );
}
