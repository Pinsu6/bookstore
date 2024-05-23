
import list from "../../public/list.json";
import Cards from "./Cards";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl containern mx-auto md:px-20 px-4 ">
        <div className="mt-20 p-2 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            All courses Are <span className="text-pink-500">Here!!</span>
          </h1>

          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            corrupti perspiciatis inventore est, veniam cumque recusandae
            blanditiis veritatis quis corporis culpa mollitia. Eos harum velit,
            dignissimos accusamus perferendis accusantium iste!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} items={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
