import React from "react";

function Notification({ newBooks }) {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center m-2">Notifications</h3>
          <hr />

          {newBooks.length > 0 ? (
            <ul>
              {newBooks.map((book, index) => (
                <>
                  <li className="m-2" key={index}>
                    <p>New book added</p>
                    {book.title}
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          ) : (
            <p>No new books available</p>
          )}
        </div>
      </dialog>
    </div>
  );
}

export default Notification;
