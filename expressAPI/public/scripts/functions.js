

const DeleteReq = (id)=>{
    if(confirm('Are you sure you want to delete this faction?')){
        let hxml = new XMLHttpRequest();
        hxml.open('DELETE',`http://localhost:3003/api/faction/${id}`,true)
        hxml.onload = ()=>{
            if(hxml.status == 202){
                window.location.reload()
            }else{
                console.log('Failed to update faction')
            }
        }
        hxml.send()
    }
}

const UpdateReq = (id,{body}) =>{
    let hxml = new XMLHttpRequest();
    hxml.open('PUT',`http://localhost:3003/api/faction/${id}`,true)
    hxml.setRequestHeader('Content-Type','application/json')
    hxml.send(body)
}