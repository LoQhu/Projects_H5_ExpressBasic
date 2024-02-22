

const DeleteReq = (id)=>{
    let hxml = new XMLHttpRequest();
    hxml.open('DELETE',`http://localhost:3003/api/faction/${id}`,true)
    hxml.send()
}

const UpdateReq = (id) =>{
    let hxml = new XMLHttpRequest();
    hxml.open('PUT',`http://localhost:3003/api/faction/${id}`,true)
    hxml.send()
}