export default function Exercic() {
    function HandelInput(){

        document.getElementById('screen').innerHTML = document.getElementById('input').value
    }
    return(

        <>
        <h1 id="screen"> hanananananjhidasfkjl </h1>
        <input id="input" type="text" />
        <button onClick={HandelInput} >Add</button>
        </>
    )
};
