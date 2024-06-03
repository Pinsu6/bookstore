function Notification({ Lastbook }) {
  console.log("BOOK IS", Lastbook);
  const renderBook = () => {
    const bookElement = [];
    for (let i = 0; i < Lastbook.length; i++) {
      bookElement.push(<li key={i}>{Lastbook[i]}</li>);
      <hr />;
    }
    return bookElement;
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Notifications</h3>
         
          {renderBook()}
        </div>
      </dialog>
    </div>
  );
}

export default Notification;
