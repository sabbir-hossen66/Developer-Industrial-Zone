import { Link } from "react-router-dom";



const Industry = ({ industry }) => {
  const { id, estate_title, segment_name, description, status, price, area, location, image } = industry
  return (
    <div>

      <div data-aos="flip-right" className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800  border border-2px-solid border-gray-200 p-2 align-items">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-wide">{estate_title}</h2>
            <p className="dark:text-gray-800"><span className="font-bold text-indigo-600">segment_name: </span>{segment_name}</p>
            <p className="dark:text-gray-800"><span className="font-bold text-indigo-600">status: </span>{status}</p>
            <p className="dark:text-gray-800"><span className="font-bold text-indigo-600">area: </span>{area}</p>
            <p className="dark:text-gray-800"><span className="font-bold text-indigo-600">location: </span>{location}</p>
            <p className="dark:text-gray-800"><span className="font-bold text-indigo-600">price: </span>{price}</p>
            <p className="dark:text-gray-800"><span className="font-bold text-indigo-600">description: </span>{description.slice(0, 25)}</p>
          </div>
          <Link to={`/industry/${id}`}>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border bg-indigo-500 text-white ">View Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Industry;