import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
const Main = lazy(() => import("./pages/Main"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Detail = lazy(() => import("./pages/Detail"));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  return (
    <>
      <header className="w-full">
        <div className="h-6 bg-red-600" />

        <div className="bg-black text-white py-4 text-center text-3xl font-bold">
          포켓몬 도감
        </div>

        <nav className="bg-white border-b">
          <div className="max-w-4xl mx-auto flex items-center justify-between px-4">
            <div className="flex gap-6 text-sm">
              <Link
                to="/"
                className="pb-3 border-b-2 border-transparent hover:border-black"
              >
                메인
              </Link>
              <Link
                to="/favorite"
                className="pb-3 border-b-2 border-transparent hover:border-black"
              >
                찜목록
              </Link>
            </div>

            <div className="flex items-center gap-2 pb-2">
              <span>🔎</span>
              <input
                onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
                className="border-b border-gray-400 px-2 text-sm outline-none"
                placeholder="포켓몬 검색"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* ───────── 메인 컨텐츠 영역 ───────── */}
      <main className="max-w-4xl mx-auto flex flex-wrap gap-5 justify-center pt-5">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
