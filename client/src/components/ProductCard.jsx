import { Icon } from '@iconify/react'

export const ProductCard = ({
  id,
  title,
  price,
  oldPrice,
  discount,
  description,
  isWishlisted,
  handleWishlist,
}) => {
  return (
    <a href="#" className="group relative block max-w-96 overflow-hidden rounded-lg">
      <button
        onClick={() => handleWishlist(id)}
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 dark:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-300"
      >
        <span className="sr-only">Wishlist</span>

        {isWishlisted ? (
          <Icon icon="line-md:heart-filled" width="20" height="20" />
        ) : (
          <Icon icon="line-md:heart" width="20" height="20" />
        )}
      </button>

      <img
        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"
        alt="Wireless Headphones"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6 transition-colors dark:border-gray-700 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-red-200 px-2 text-sm text-red-800 dark:bg-red-500">
            -{discount}%
          </span>
          <p className="font-semibold text-gray-700 dark:text-gray-300">${price}</p>
          <span className="text-sm text-gray-600 line-through dark:text-gray-500">${oldPrice}</span>
        </div>

        <h3 className="mt-1.5 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>

        <p className="mt-1.5 line-clamp-3 text-gray-700 dark:text-gray-400">{discount}</p>

        <form className="mt-4 flex gap-4">
          <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
            Add to Cart
          </button>

          <button
            type="button"
            className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Buy Now
          </button>
        </form>
      </div>
    </a>
  )
}
