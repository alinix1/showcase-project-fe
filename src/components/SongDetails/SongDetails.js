// import { useState, useEffect } from "react";
// import getSongsData from "../../apiCalls";
// // import './SongDetails.css'
// import { Link } from "react-router-dom";

// const SongDetails = ({ songs }) => {
//   const [id, setSingleSong] = useState("");

//   useEffect(() => {
//     getSongsData(`/songs/${id}`).then((data) => setSingleSong(data.id));
//   }, [id]);

//   return (
//     <div>
//       <Link to={`/${id}`}>Song Details Page</Link>
//     </div>
//   );
// };

// export default SongDetails;
