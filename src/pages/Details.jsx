import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../utils/constants';
import { Description } from '@mui/icons-material';
import CardProduct from '../components/CardProduct';



const Details = () => {
    const [data, setData] =useState([])




    const { id } = useParams();
    useEffect(() => {
        axios(`${BASE_URL}/products/${id}`).then((response) => {
            setData(response.data)
        })
    }, []);
    
    return (
        <CardProduct data={data}/>
    )
}

export default Details