import { useContext } from "react";
import shareUbication from "/share_ubication.png";
import { Context } from "../context/Context";

function ShareButton() {
  const { from } = useContext(Context);

  function handleError() {
    alert("Primero debes ubicarte en el mapa, ¡Has doble click encima de él!")
  }

  console.log("XD")

  function handleShare() {
    const url = `http://localhost:5173/go
      /${from[0].toString().replace(".", "%5D")}
      /${from[1].toString().replace(".", "%5D")}
    `;

    navigator.clipboard.writeText(url).then(() => alert("¡Copiado en el portapapeles!")).catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
  }

  return (from[0] === 0) ? (
    <button
      className="bg-blue-500 my-3 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded opacity-50 cursor-not-allowed"
      onClick={handleError}
    >
      <img src={shareUbication} className="inline" width={30} /> Share your
      ubication
    </button>
  ) : (
    <button
      className="bg-blue-500 my-3 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={handleShare}
    >
      <img src={shareUbication} className="inline" width={30} /> Share your
      ubication
    </button>
  );
}

export default ShareButton;
