import Contect from "../model/contect.model.js";

export const sendMessage = async (req, res) => {
  const { email, msg } = req.body;
  const con = new Contect({
    email: email,
    msg: msg,
  });
  await con.save();
};

export const getMessage = async (req, res) => {
  const getMessage = await Contect.find();
  res.status(200).json({ getMessage });
};

export const deleteMessage = async (req, res) => {
  const { _id } = req.params;
  const del = await Contect.findByIdAndDelete({ _id });
  res.status(200);
};
