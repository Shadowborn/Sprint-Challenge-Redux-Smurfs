import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const JUST_FETCH = 'JUST_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILURE_FETCH = 'FAILURE_FETCH';


export const fetchSmurfs = () => dispatch => {
    dispatch({ type : JUST_FETCH })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type : SUCCESS_FETCH, payload: res.data })
                console.log("Fetch data", res.data);
            })
        .catch(err => {
            dispatch({type:FAILURE_FETCH})
            console.log("Axios call error", err);
        })
}




export const ADD_NEW = 'ADD_NEW';

export const newSmurf = () => dispatch => {
  dispatch({ type: ADD_NEW })
  axios
    .post('http://localhost:3333/smurfs')
    console.log("Add new smurf axios", this.state)
    .then(res => {
      dispatch({ payload: res.data })
    })
    .catch(err => {
      dispatch({err})
    })
}





/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
