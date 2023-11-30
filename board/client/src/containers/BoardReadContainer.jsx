import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardRead from '../components/BoardRead';

// 👩‍💻 게시글 조회
const BoardReadContainer = () => {
    const { no } = useParams()

    const [board, setBoard] = useState({});

    const getBoard = async () => {
        try {
            const response = await boards.select(no);
            const data = response.data;
            console.log(data);
            setBoard(data);
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect( () => {
        getBoard()
    },[])

    // return <></>
    return (<BoardRead  no={no}
                        board={board}
           />)
}

export default BoardReadContainer