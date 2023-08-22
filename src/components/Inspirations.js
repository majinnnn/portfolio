import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
// import { MongoClient } from 'mongodb';


/*
async function fetchData() {
	uri = process.env.MONGODB_URI;

	try {
		const client = await clientPromise;
		const db = await client.db('portfolio').collection('fans');
		// const response = await fetch('mongodb+srv://muhammadarham:KFwG5x4Moqn0IJgt@cluster247.z5fhm1h.mongodb.net/');
		// const data = await response.json();
		// const data = await db.find().sort({ timestampField: -1 }).limit(5).toArray(); // to get the most recent 5 entries 
		const data = await db.find().limit(5).toArray();

		// const rec = data[0]
		console.log(data);
		} catch (e) {
		console.error(e);
	}


  // try {
  //   const response = await fetch('https://jsonapi.org/articles?include=author');
  //   if (!response.ok) {
  //     throw new Error('Error fetching data from server');
  //   }
  //   const data = await response.json();
  //   console.log(data); // or update state with retrieved data
  // } catch (error) {
  //   console.error(error);
  // }
}
*/


const inspirers = [
	{
		img: "img/inspirers/billgates.jpg",
		name: "Bill Gates",
		field: "CEO",
		at: "microsoft",
		quote: "Don't compare yourself with anyone in this world... if you do so, you are insulting yourself.",
	},
	{
		img: "img/inspirers/stevejobs.jpg",
		name: "Steve Jobs",
		field: "CEO",
		at: "apple",
		quote: "Innovation distinguishes between a leader and a follower.",
	},
	{
		img: "img/inspirers/edsheeran.jpg",
		name: "Ed Sheeran",
		field: "singer/songwriter",
		at: "",
		quote: "The more you write tunes, the better they will become. The more you do gigs, the better you will become.",
	},
	{
		img: "img/inspirers/leomessi.jpg",
		name: "Lionel Messi",
		field: "Footballer",
		at: "paris saint-germain",
		quote: "The day you think there is no improvements to be made is a sad one for any player.",
	},
	
]

const Inspirations = () => {
	const { nav, changeNav } = useContext(NavContext);
	


	// const data = getServerSideProps();
	// console.log(data)
	// fetchData();


	return (
		<section id="inspirations" className={`${nav === "inspirations" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          My <span>Inspirations</span>
        </h2>
        <span className="title-head-subtitle">
          Some of the quotes from the people who have inspired me in life.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container">
          <div className="row">
            {inspirers.map((inspirer, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                      <img className="img-fluid" src={inspirer.img} alt="" />
                  </figure>
                  {/* Figure Ends */}
									<p className="font-weight-600 uppercase title-section" style={{marginBottom:'10px'}}>{inspirer.name}</p>
									<span className="d-block font-weight-400 uppercase">
										{inspirer.field} {" "} 
										{inspirer.field==='singer/songwriter' ? 
										<span className="separator" ></span> 
										: <span className="separator" >at</span>}
										
										<span className="font-weight-700"> {" "} {inspirer.at} </span>
									</span>
									<p></p>
                  
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt" style={{marginBottom:'50px'}}>
                    <em><span> { "\“" } {inspirer.quote} { "\”" } </span></em>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
    </section>
	);
};


// export async function getServerSideProps() {
//   try {
//     const uri = process.env.MONGODB_URI;
//     const client = await MongoClient.connect(uri);
//     const db = client.db('portfolio').collection('fans');
//     const documents = await collection.find().toArray();
//     client.close();

//     return {
//       props: {
//         data: documents,
//       },
//     };
//   } catch (err) {
//     console.error(err);
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// }


export default Inspirations;