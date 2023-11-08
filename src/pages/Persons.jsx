import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Button from '@mui/material/Button';
import { BASE_URL } from '../utils/constants';



const Persons = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 190 },
    {
        field: 'name',
        headerName: 'adi',
        width: 150,
        editable: true,
    },
    {
        field: 'surname',
        headerName: 'soyadi',
        width: 150,
        editable: true,
    },
    {
        field: 'username',
        headerName: 'istifadeci adi',
        width: 110,
        editable: true,
    },
  ];
  const [data, setData] = useState([])

  const getData = async () => {
    try {
        let response = await axios(`${BASE_URL}/get-data`);
        console.log(response.data.data)
        setData(response.data.data)
    } catch {
    } 
}



useEffect(() => {
    getData()
}, [])

  const navigate = useNavigate()
  return (
    <div className=' m-40'>
      <div className=' mt-28'>
      <Button variant="contained"  onClick={()=> {navigate("/create-person")}}>Create Person</Button>
      </div>
        <DataTable columns={columns} rows={data} url={"/update-person"} />
    </div>
  )
}

export default Persons