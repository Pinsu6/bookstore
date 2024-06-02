import Book from "../model/book.model.js";

export const getbook = async (req, res) => {
  try {
    const book = await Book.find();

    res.status(200).json(book);
  } catch (error) {
    console.log("from book controller", error);
    res.status(500).json(error);
  }
};

export const addBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;
    const AddBook = new Book({
      name,
      price,
      category,
      image,
      title,
    });
    await AddBook.save();
    res.status(200).json({
      message: "Book Added",
    });
  } catch (error) {
    console.log("error from add book ", error);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedBook = await Book.findByIdAndDelete({ _id });

    if (deleteBook) {
      res.status(200).json({
        message: "deleted",
      });
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchOneBook = async (req, res) => {
  const { _id } = req.params;

  const bookData = await Book.findById({ _id });
  res.status(200).json({ bookData });
  
};

export const editBook = async (req, res) => {
  const { _id } = req.params;
  const { name, price, category, image, title } = req.body;
  const editDetails = await Book.findByIdAndUpdate(_id, {
    name,
    price,
    category,
    image,
    title,
  });
  res.status(200).json({ message: "Edited" });
};
