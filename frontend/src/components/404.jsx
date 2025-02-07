import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Book } from "lucide-react"

export default function NotFound() {
  const books = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-md w-full space-y-8 text-center relative">
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="absolute text-purple-600 opacity-20"
            animate={{
              x: `${book.x}%`,
              y: `${book.y}%`,
              rotate: book.rotation,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Book size={32} />
          </motion.div>
        ))}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-9xl font-extrabold text-purple-600">404</h1>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Oops! Page Not Found</h2>
          <p className="mt-2 text-lg text-gray-600">Looks like you've wandered off campus!</p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block mt-8 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
