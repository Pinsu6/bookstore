function Notification({ Lastbook }) {
  console.log("BOOK IS", Lastbook);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">New Book added {Lastbook}</p>
        </div>
      </dialog>
    </div>
  );
}

export default Notification;
