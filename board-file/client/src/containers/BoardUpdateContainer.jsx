import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as boards from '../apis/boards';
import * as files from '../apis/files';
import BoardUpdateForm from '../components/BoardUpdate/BoardUpdateForm';

// 👩‍💻 게시글 수정
const BoardUpdateContainer = () => {  
    const { no } = useParams();

    const [board, setBoard] = useState({})
    const [fileList, setFileList] = useState([])
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate()

    const onUpdate = async (no, title, writer, content) => {
        try {
            const response = await boards.update(no, title, writer, content)
            console.log(response.data);
            alert('수정 완료')

            // ➡ 게시글 목록 이동
            navigate('/boards')
        } catch(e) {
            console.log(e);
        }
    }

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

    const onDelete = async (no) => {
        const response = await boards.remove(no);
        console.log(response.data);
        alert('삭제 완료')

        // ➡ 게시글 목록 이동
        navigate('/boards')
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

    const onDeleteFile = async (fileNo) => {
        try {
            // 파일 삭제 요청
            const response = await files.remove(fileNo);
            console.log(response.data);
    
            // fileList에서 fileNo와 일치하는 객체를 filter하여 새로운 배열 생성
            const updatedFileList = fileList.filter((file) => file.no !== fileNo);
    
            // setFileList로 상태 업데이트
            setFileList(updatedFileList);
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };
    
    


    useEffect( () => {
        getBoard()
    },[])

    return (<BoardUpdateForm no={no} 
                             board={board} 
                             fileList={fileList} 
                             onUpdate={onUpdate}
                             onDelete={onDelete}
                             isLoading={isLoading}
                             onDownload={(fileNo, fileName) => onDownload(fileNo, fileName)}
                             onDeleteFile={(fileNo) => onDeleteFile(fileNo)}
                              />)
}

export default BoardUpdateContainer