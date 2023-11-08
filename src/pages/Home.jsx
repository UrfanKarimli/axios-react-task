import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios';
import "./home.css"
import DataTable from '../components/DataTable';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 150,
            editable: true,
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 110,
            editable: true,
        },
    ];

    const FetchData = async () => {
        try {
            let response = await axios(`${BASE_URL}/products`);
            setData(response.data)
            setLoading(false);
        } catch(error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
                footer: '<a href="">Why do I have this issue?</a>'
              })
        } 
    }

    useEffect(() => {
        FetchData()
    }, [])
    return (
        <div className='flex h-screen justify-center items-center'>

            {
                loading ? <Loading /> : <DataTable columns={columns} rows={data} url="/details" />
            }

        </div>
    )
}

export default Home