import React ,{props} from "react";

const List = ({ taskList,deleteitem ,Comitem}) => {
    return (
        <div className=" mr-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2 " >
            {taskList?.map((item) => {
                return (
                 
                       <div className="border-2 border-indigo-500/100  m-5  h-26 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2    ">
                        <div>
                       <h2>Task Name: {item?.task} </h2>
                       
                       </div>
                       <div>
                       <button type="button" class="focus:outline-none text-white bg-red-700 mt-2 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-1 " 
                       onClick={deleteitem} value={item?.id}>Delete</button>
                       </div>
                       <div> <p className="">Status: {item?.Status ? "Completed" : "Not Completed"}</p></div>
                       <div><button  id={item?.id} type="button" onClick={Comitem} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 mb-2 font-medium rounded-lg text-sm px-4 py-1 " 
                        >Completed</button></div>
                       
                      
                       
                        </div>
                
                );
            })}
        </div>
    );
};
export default List;