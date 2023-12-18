// import {FaRegBookmark} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { data } from "../reducer/characterID";

const Characters = ({ characters }) => {
  // Implementação do reducer
  const dispatch = useDispatch();

  return (
    <>
      {characters?.map((item, key) => (
        <div
          className="h-96 w-64 flex flex-col p-4 gap-5 glass border-2 text-green-500 cursor-pointer"
          key={key}
        >
          {/* <div className="w-full pl-2 pt-2 absolute">
          <FaRegBookmark className="text-20 text-green-400"/>
          </div> */}
          <img
            className="w-full h-40 bg-cover"
            src={item.image}
            onClick={() => dispatch(data(item.id))}
          />
          <div className="w-full h-10 flex justify-center items-center text-24 text-blue-200">
            {item.name}
          </div>
          <div className="w-full h-28 p-2 gap-3 text-sm flex flex-wrap font-normal">
            <label className="bg-blue-200 shadow-md w-14 h-8 rounded-md flex justify-center items-center">
              {item.gender}
            </label>
            <label className="bg-blue-200 shadow-md w-14 h-8 rounded-md flex justify-center items-center">
              {item.status}
            </label>
            <label className="bg-blue-200 shadow-md w-14 h-8 rounded-md flex justify-center items-center">
              {item.species}
            </label>
            <label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
              {item?.location?.name}
            </label>
          </div>
        </div>
      ))}
    </>
  );
};

export default Characters;
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-blue-200 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
<label className="bg-green-100 shadow-md w-full text-pp h-8 rounded-md flex justify-center items-center flex-nowrap">
  {item?.location?.name}
</label>
