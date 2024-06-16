import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardRead from '../components/BoardRead/BoardRead';

// 👩‍💻 게시글 조회
const BoardReadContainer = () => {
    const { no } = useParams()

    const [board, setBoard] = useState({});
    const [isLoading, setLoading] = useState(false);

    const getBoard = async () => {
        setLoading(true)
        try {
            const response = await boards.select(no);
            const data = response.data;
            console.log(data);
            setBoard(data);
        }
        catch(e) {
            console.log(e);
        }
        setLoading(false)
    }

    useEffect( () => {
        getBoard()
    },[])

    // return <></>
    return (<BoardRead  no={no}
                        board={board}
                        isLoading={isLoading}
           />)
}

export default BoardReadContainer