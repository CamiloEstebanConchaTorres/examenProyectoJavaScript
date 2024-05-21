export const getPantalones = async ()=>{
    let res = await fetch("http://172.16.101.146:5999/pantalon")
    let data = await res.json();
    return data;
}