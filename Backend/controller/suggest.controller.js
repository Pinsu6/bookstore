import Suggest from "../model/suggest.model.js";

export const addSuggest = async (req, res) => {
  try {
    const { bookName } = req.body;
    const add = new Suggest({
      bookName: bookName,
    });
    await add.save();
    res.status(200).json({ message: "Thankyou" });
  } catch (error) {
    console.log("error from sugest ", error);
  }
};

export const getSuggest = async (req, res) => {
  try {
    const get = await Suggest.find();
    res.status(200).json({ get });
  } catch (error) {
    console.log("error from getSuggest ", error);
  }
};

export const deleteSuggest = async (req, res) => {
  const { _id } = req.params;

  const deletedBook = await Suggest.findByIdAndDelete({ _id });
  res.status(200).json({deletedBook})

}
