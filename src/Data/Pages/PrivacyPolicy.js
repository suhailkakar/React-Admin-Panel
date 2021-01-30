import { Editor } from "@tinymce/tinymce-react";

import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";
import axios from 'axios'


import "./Styles/style.css";
export default function App() {
    const [wysiwyg, setWysiwyg] = useState("");
    const [parsed, setParsed] = useState("");
    const handleEditorChange = content => {
        setWysiwyg(content);
        setParsed(content);
    };
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const userPosts = await axios.get("https://seheri.saikiranreddy.com/admin/all")

            setPosts(userPosts.data);  // set State
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {

        getPosts()
    }, [])
    // submitdata()

    console.log(wysiwyg)
    return (
        <div className="App">
            <br />
            {posts.map(post => (
                <Editor
                    initialValue={post.privacypolicy}
                    init={{
                        apiKey: 'i5fjexv8dqhulbgncprpvt04h7xoz6e2oiiblrzjymvi2g4o',
                        height: 500,
                        plugins: [
                            "advlist autolink lists link image",
                            "charmap print preview anchor help",
                            "searchreplace visualblocks code",
                            "insertdatetime media table paste wordcount"
                        ],
                        toolbar:
                            "undo redo | formatselect | fontselect fontsizeselect formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help"
                    }}
                    onEditorChange={handleEditorChange}
                />
            ))}

            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <button onClick={


                    function submitdata() {
                        axios.patch('https://seheri.saikiranreddy.com/admin/privacy-policy/60057c0008779a91704d7c47', {
                            "privacypolicy": wysiwyg,
                        })
                            .then(e => {
                                // console.log('Updated TAC is   ', e.data),
                                alert("Changes Saved Successfully")
                            })
                    }} className="label theme-bg text-white f-12" style={{ alignSelf: 'center', color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", padding: "6px 20px 6px 20px", border: "none", borderRadius: "5px", fontSize: "25px", fontWeight: "400", boxShadow: "0 1px 10px rgba(0,0,0,0.3)", cursor: "pointer" }} > Save ✓ </button>


            </div>

            {/* <p style={{ textAlign: 'center' }}>Source Code</p>
      <div className="wysiwyg">{wysiwyg}</div> */}
        </div >
    );
}
