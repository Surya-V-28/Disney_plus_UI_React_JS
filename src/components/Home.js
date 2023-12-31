/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import styled from "styled-components";
// import ImgSlider from "./ImgSlider";
// import NewDisney from "./NewDisney";
// import Originals from "./Originals";
// import Recommends from "./Recommends";
// import Trending from "./Trending";
// import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      // eslint-disable-next-line array-callback-return
      snapshot.docs.map((doc) => {
        console.log(recommends);
        // eslint-disable-next-line default-case
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

// import styled from "styled-components";
// import React from "react";
// import ImgSlider from "./imgSlider";
// import Veiwers from "./Veiwers";
// import Recommend from "./Recommend";
// import NewDisney from "./NewDisney";
// import Originals from "./Originals";
// import Trendings from "./Trending";
// import  { useEffect }  from 'react'
// import {useDispatch, useSelector } from 'react-redux'
// import db from "../firebase";
// import {setMovies} from "../features/movies/movieSlice"
// import { selectUserName} from "../features/users/userslice";
// import { collection, getDocs } from "firebase/firestore";



// const Home=(props) => {

//   const dispatch = useDispatch();
//   const username = useSelector(selectUserName);
//   let recomended =[];
//   let newdisneys = [];
//   let originals = [];
//   let trendings = [];
//   var index = 0;
//   const fetchPost = async () => {
       
//     await getDocs(collection(db, "movies"))
//         .then((querySnapshot)=>{               
//             const newData = querySnapshot.docs
//                 .map((doc) => {
//                   switch(doc.data().type){
//                     case 'recommend' :
//                       recomended.push({id:doc.id,...doc.data()})
//                       break;
//                     case 'new':
//                       newdisneys.push({id:doc.id,...doc.data()})
//                       break;
//                     case 'original':
//                       originals.push({id:doc.id,...doc.data()})
//                       break;
//                     case 'trending':
//                       trendings.push({id:doc.id,...doc.data()})
//                       break;
//                     default :
                      
//                 }
//                 return null;
//                 }
//          ) }

//         )
//       }
      
//       useEffect(()=>{
//         fetchPost();
//         console.log(recomended);
//     }, [recomended,index]);
//     dispatch(
//       console.log(recomended),
//       setMovies ({
//         recommend: recomended,
//         newdisney:newdisneys,
//         trending:trendings,
//         originals:originals,
//       })
//     )
    
  

//  return (
//   <Container>
//     <ImgSlider></ImgSlider>
//     <Veiwers/>
//     <Recommend />
//     <NewDisney/>
//     <Originals/>
//     <Trendings/>
//   </Container>
    
  
//     );

//  }

// const Container = styled.main`
//   position: relative;
//   padding: 0px calc(3vw + 5px);
//   min-height: calc(100vh - 250px);
//   overflow-x:hidden;
//   top: 70px;
//   display :block;
 
//   :after {
//     background:url("/images/home-background.png") center center / cover no-repeat fixed;
//     content: "";
//     z-index: -1;
//     position: absolute;
//     opacity:1;
//     inset: 0px; 
//   }
// `


// export default Home