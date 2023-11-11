import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BASE_URL } from '../utils/constants';
import Button from '@mui/material/Button';
import DataTable from '../components/DataTable';



const UptadePerson = () => {
    const {id} = useParams()
    const [datas, setData] = useState([])

    const getData = async () => {
        try {
            let response = await axios.get(`${BASE_URL}/get-data/${id}`);
            // console.log([response.data.data])
            setData([response.data.data])
        } catch (error){
            console.log(error.mesage)
        }
    }

    useEffect(() => {
        getData()
    }, [id])


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
    const navigate = useNavigate()
    const [userData, setUserData] = useState(
        {
            id: Number(id),
            name: '',
            surname: '',
            username: '',
            password: '',
        }
    )
    const updateData = async (e) => {
        // e.preventDefault();
        // const setUserData = {name:userData.name,surname:userData.surname,  username:userData.username, password:userData.password}
        // console.log("userData "  , userData)
        axios.put(`${BASE_URL}/update-data/${id}`, userData).then(resp => {
            navigate("/persons")
        })
    }
    const onHandleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });

    }

    return (
        <div className=' m-40 '>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="adi" variant="outlined" name="name" onChange={onHandleChange} />
                <TextField id="filled-basic" label="soyadi" variant="outlined" name="surname" onChange={onHandleChange} />
                <TextField id="standar-basic" label="istifadeci adi" variant="outlined" name="username" onChange={onHandleChange} />
                <TextField id="standard-basic" label="sifresi" type='password' variant="outlined" name="password" onChange={onHandleChange} />
            </Box>
            <Button variant="contained" onClick={updateData}  >update Person</Button>
            <DataTable columns={columns} rows={datas} url={"/"} />
        </div>
    )
}

export default UptadePerson