import axios from 'axios';

// 다운로드
export const download = (fileNo) => axios.get(`/file/${fileNo}`, {responseType: 'blob',} )

// 파일 삭제
export const remove = (fileNo) => axios.delete(`/file/${fileNo}`)
