export const getCarritos = async ()=>{
    let res = await fetch("http://172.16.101.146:5999/carrito")
    let data = await res.json();
    return data;
}