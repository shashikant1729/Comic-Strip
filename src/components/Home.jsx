import React from 'react'
import demo from '../assets/images/demo.png'

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setSearchName, fetchData, query, setSearchedData, getImage, setAllData} from "../Redux/Actions/dataAction";

const items = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'link here',
  },
];




const Home = () => {
  const data = useSelector((state) => state.data);
	const dispatch = useDispatch();

  const options = {
    url : 'https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud',
    headers: { 
        "Accept": "image/png",
        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
        "Content-Type": "application/json" 
    },
    method: "POST",
    // body: JSON.stringify(data),
};

const handleChange = (event) => {
  const { name, value } = event.target;
  dispatch(setSearchName(value));
};


function blobToDataURL(blob, callback) {
  const reader = new FileReader();

  reader.onloadend = () => {
    callback(reader.result);
  };

  reader.readAsDataURL(blob);
}



async function query(data) {
  console.log("api calling......");
	const response = await fetch(
		"https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
		{
			headers: { 
				"Accept": "image/png",
				"Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
				"Content-Type": "application/json" 
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
  // console.log("calling api end.....");
	return result;
}
var dURL = "";
async function  getData(dURL){
  await setSearchedData(dURL);
}
const handleSubmit = (event)=>{
  event.preventDefault();
  query({"inputs": data.searchName}).then((blob)=>{
    return blobToDataURL(blob,(dataURL)=>{
      // Use the dataURL as needed, for example, set it as the source of an image element
      const imgElement = document.getElementById("myData")
      imgElement.src = dataURL;
      getData(dataURL)
      dURL= dataURL;
      console.log(dataURL);
      document.body.appendChild(imgElement);})
  })
   dispatch(setSearchName(""));
}



    // console.log(data);
  return (
    <div className='flex flex-col  h-fit mx-4'>
<form className="flex items-center">   
    <label htmlFor="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" name="search" onChange={handleChange} value = {data.searchName} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required=""/>
        <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
        </button>
    </div>
    <button type="submit" onClick={handleSubmit} className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round"  strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>
</form>

<div className = "flex flex-grow flex-col w-full h-full my-2 border-4 box-border border-blue-600 border-opacity-75 align-middle">
  <div className='rounded-lg mx-auto w-fit h-screen'>
    <img id = "myData" src={dURL} alt="" srcset={demo} className='h-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none max-w-xs py-2 lg:max-w-md' />
  </div>
    

</div>

<style>
{`.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}`}
</style>


  </div>
    // </div>
  )
}

export default Home