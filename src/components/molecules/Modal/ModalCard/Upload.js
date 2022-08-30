import React, { useContext, useEffect, useState } from 'react'
import { TitleTask, ContainerSelect, TitleLabel, StyleForm } from './style';


const Upload = (props) => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [productCatalog, setProductCatalog] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("productCatalog")

        if (arr) {
            let obj = JSON.parse(arr)
            setProductCatalog(obj)

        }

    })

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        const reader = new FileReader();
        reader.addImag('load', () => {
            localStorage.setItem('recent-image', reader.result)
        })
    }

    return (

        <StyleForm>
            <input type="file" id="myFileInput" name="file"  onChange={changeHandler} />
            <img src="" id="imgPreview" alt="" />
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </StyleForm>
    )
}

export default Upload
