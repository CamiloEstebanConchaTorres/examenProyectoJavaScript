export const getCamisetas = async ()=>{
    let res = await fetch("http://172.16.101.146:5999/camiseta")
    let data = await res.json();
    return data;
}