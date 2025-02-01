import { useEffect, useState } from "react"

const Book = {
  id: 0,
  x: 0,
  y: 0,
  rotation: 0,
}

export const useFloatingBooks = (count) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const newBooks = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }))
    setBooks(newBooks)

    const interval = setInterval(() => {
      setBooks((prevBooks) =>
        prevBooks.map((book) => ({
          ...book,
          x: (book.x + Math.random() - 0.5 + 100) % 100,
          y: (book.y + Math.random() - 0.5 + 100) % 100,
          rotation: (book.rotation + (Math.random() - 0.5) * 10 + 360) % 360,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [count])

  return books
}

