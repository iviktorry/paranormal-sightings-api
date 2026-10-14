import Header from "./components/Header";
import Main from "./components/Main";
import appBg from "/images/ghostbg.jpg";

export default function App() {
  return (
    <div className="font-standard relative flex min-h-lvh flex-col gap-4 px-4 pb-4 text-sm text-white">
      <img
        src={appBg}
        alt=""
        className="fixed inset-0 -z-10 h-screen w-full object-cover brightness-60"
      />
      <div className="absolute inset-0 -z-10 size-full bg-taupe-700/70 object-cover"></div>
      <Header />


      
      <Main />
    </div>
  );
}
