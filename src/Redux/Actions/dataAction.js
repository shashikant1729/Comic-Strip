import axios from "axios";
import options from "../../utils/api";

export const setName = (name) => ({
	type: "SET_NAME",
	payload: name,
});

export const setEmail = (email) => ({
	type: "SET_EMAIL",
	payload: email,
});

export const setSearchName = (searchName) => ({
	type: "SET_SearchName",
	payload: searchName,
});

export const setSearchedData = (searchedData) => ({
	type: "SET_SearchedData",
	payload: searchedData,
});

export const setAllData = (allData) => ({
	type: "SET_AllData",
	payload: allData,
});

export const fetchData = (options, query) => {
	return async (dispatch) => {
		// console.log(mName);
		options.query = { input: `${query}` };
		try {
			const response = await axios.request(options);
			console.log(`response data : `);
			console.log(response);
			if (response.data.response) {
				console.log(response);
				await dispatch({ type: "SET_SearchedData", payload: response });
			} else {
				console.log(response.error);
				await dispatch({ type: "SET_SearchedData", payload: response });
			}
			// return response.data
		} catch (error) {
			console.error("Error : " + error);
			await dispatch({ type: "SET_SearchedData", payload: { error: "error" } });
			// return error;
		}
	};
};

function convertBlobToDataURL(blob) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => resolve(reader.result);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}

function cntImage(response) {
	response
		.then((blobData) => {
			return convertBlobToDataURL(blobData);
		})
		.then((dataURL) => {
			console.log(dataURL);
			console.log("api calling end....");
			return dataURL;
		})
		.catch((error) => {
			console.error("Error fetching or displaying image:", error);
			console.log("api calling end....");
			return error;
		});
}

export async function getImage(data) {
	console.log("here we go........");
	return async (dispatch) => {
		try {
			await dispatch({ type: 'SET_SearchedData', payload:data});
		} catch (error) {
			console.error("Error : " + error);
			await dispatch({ type: 'SET_SearchedData', payload:{error: "error"}});
			console.log("api calling end....");
			// return error;
		}
	};
}
