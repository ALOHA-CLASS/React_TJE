import axios from 'axios';

// 업로드
export const upload = (formData, headers) => axios.post(`/file/upload`, formData, headers)

// 다운로드
export const download = (fileNo) => axios.get(`/file/${fileNo}`, {responseType: 'blob',} )

// 파일 삭제
export const remove = (fileNo) => axios.delete(`/file/${fileNo}`)
