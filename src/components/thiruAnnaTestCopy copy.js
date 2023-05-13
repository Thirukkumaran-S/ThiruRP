import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import axios from "axios"



const ThiruBro = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);
    const [test, setTest] = useState("");

    const { udata, setUdata } = useContext(adddata);

    const { updata, setUPdata } = useContext(updatedata);

    const { dltdata, setDLTdata } = useContext(deldata);

    const getdata = async () => {

        const res = await fetch("http://2227-35-223-215-17.ngrok.io/", {
            method: "GET",

        });

        const data = await res.json();
        console.log(data, "data");
        setTest(data)
    }

    useEffect(() => {
        // getdata();
    }, [])

    

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        axios.post('http://2227-35-223-215-17.ngrok.io/classify_face', formData)
            .then(response => {
                console.log('Image uploaded successfully:', response.data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
        // Add code here to handle image upload to a server
        console.log('Image uploaded:', image);
    }

    return (

        <>
            {
                test && <p> here {test}</p>

            }

            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit">Upload Image</button>
            </form>
            <button onClick={getdata}  >testing</button>
           
        </>
    )
}

export default ThiruBro

















