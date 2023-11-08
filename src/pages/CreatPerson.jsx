import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BASE_URL } from '../utils/constants';
import Button from '@mui/material/Button';



const CreatPerson = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState(
        {   id: Date.now(),
            name: '',
            surname: '',
            username: '',
            password: '',
        }
    )
    const sendData = () => {
        axios.post(`${BASE_URL}/create-data`, userData).then(resp => {
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
            <Button variant="contained" onClick={sendData}  >Create Person</Button>
        </div>
    )
}

export default CreatPerson