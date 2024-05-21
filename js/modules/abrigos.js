export const getAbrigos = async ()=>{
    let res = await fetch("http://172.16.101.146:5999/abrigo")
    let data = await res.json();
    return data;
}



