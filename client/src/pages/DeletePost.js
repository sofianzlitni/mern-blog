export default function DeletePost(){
    fetch(`/api/delete`+id, {
        method: 'DELETE',
        credentials: 'include',
        
    })
    return(
        <div>Hello Delete</div>
    )
};