import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ListContext } from "../../components/context/listContext/movieContext"
import { getLists } from "../../components/context/listContext/listApiCalls";

export default function ListList() {
  const {lists, dispatch} = useContext(ListContext);

  useEffect( ()=> {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
   // setData(data.filter((item) => item.id !== id));
   

  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
  
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "title", headerName: "title", width: 120 },
    { field: "type", headerName: "type", width: 120},
    
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link 
            to={{ pathname: "/product/" + params.row._id, movie: params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
     <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(e)=>e._id}
      />
    </div>
  );
}
