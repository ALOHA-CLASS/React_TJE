import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as boards from '../apis/boards';
import * as files from '../apis/files';
import BoardRead from '../components/BoardRead/BoardRead';

// 👩‍💻 게시글 조회
const BoardReadContainer = () => {
    const { no } = useParams()

    const [board, setBoard] = useState({});
    const [fileList, setFileList] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getBoard = async () => {
        setLoading(true)
        try {
            const response = await boards.select(no);
            const data = response.data;
            console.log(data);

            const board = data.board;
            const fileList = data.fileList;
            setBoard(board);
            setFileList(fileList);
        }
        catch(e) {
            console.log(e);
        }
        setLoading(false)
    }

    const onDownload = async (fileNo, fileName) => {
        
        const response = await files.download(fileNo);
        console.log(response);

        // 서버에서 반환된 파일 데이터를 Blob으로 변환
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);


    }

    useEffect( () => {
        getBoard()
    },[])

    // return <></>
    return (<BoardRead  no={no}
                        board={board}
                        fileList={fileList}
                        isLoading={isLoading}
                        onDownload={(fileNo, fileName) => onDownload(fileNo, fileName)}
           />)
}

export default BoardReadContainer