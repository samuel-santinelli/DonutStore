import Characters from "../components/Characters";
import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import MoreInformations from "../components/MoreInformations";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import {
  getCharacters,
  getCharacterByName,
  getCharacterByID,
} from "../services/services";
import { data } from "../reducer/characterID";

const DefaultLayoyt = () => {
  const [page, setPage] = useState(1);
  const [itens, setItens] = useState([]);
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");
  const characterID = useSelector((state) => state.characterID);
  const characterIDResult = characterID.id;
  const dispatch = useDispatch()

  useEffect(() => {
    if (!characterIDResult) {
      dispatch(data(1))
    }
    
    if (search.length) {
      Promise.resolve(getCharacterByName(search)).then((response) => {
        if (response) {
          setItens(response);
        }
      });
    } else {
      Promise.resolve(getCharacters(page)).then((response) => {
        if (response) {
          setItens(response);
        }
      });
    }
    Promise.resolve(getCharacterByID(characterIDResult)).then((response) => {
      if (response) {
        setCharacter(response);
      }
    });
  }, [search, page, characterIDResult]);
  

  return (
    <div className="font-schwifty w-full flex flex-col home">
      <Sidebar />
      <div className="h-full w-full p-5 gap-5 flex justify-center flex-row">
        <div className="flex flex-col w-full h-screen">
          <div className="flex flex-row justify-center gap-3">
            <input
              className="w-8/12 h-8 pl-2 glass focus:outline-0 text-green-100"
              placeholder="Procurar por nome..."
              onKeyUp={(e) => setSearch(e.target.value)}
            />
            {search === "" && (
              <>
                <FaArrowCircleLeft
                  className={
                    page !== 1
                      ? `text-xl text-green-200 cursor-pointer duration-100`
                      : "text-xl text-green-400"
                  }
                  onClick={() => setPage(page === 1 ? page && 1 : page - 1)}
                />
                <FaArrowCircleRight
                  className="text-xl text-green-200 cursor-pointer"
                  onClick={() => setPage(page + 1)}
                />
              </>
            )}
          </div>
          <div className="flex h-[80%] w-full flex-wrap overflow-auto justify-center p-5 gap-6">
            <Characters page={page} characters={itens} />
          </div>
        </div> 
          <MoreInformations data={character} />
      </div>
    </div>
  );
};

export default DefaultLayoyt;
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
