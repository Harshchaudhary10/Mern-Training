// const res =
//     document.querySelector('div')
//     // console.log(res);
//     // res.remove();
//   const c=
// //   document.querySelector('p')
//   document.querySelector('p:nth-of-type(2)')
// res.removeChild(c)
// function getInfo(e){
//      console.log(e)
//     // // console.log("Btn clicked")
//     // const d=document.querySelector("div")
//     // // const el=document.createElement('p')
//     // // el.innerText ="my name"
//     // d.prepend("My name")
//     // e.target.style.backgroundColor='green'
//     // e.target.setAttribute('style',backgroundColor="green")
//    e.target.style.color="red" 
//    e.target.style.backgroundColor="green"
// }
// const firstnameChange=(e)=>{
//     const val=e.target.value
//     if(val.length > 3)
//      console.log('correct')
// }
// function submitForm(a){
//     a.preventDefault()
//     const t = a.target
//     for(let i=0;i<t.length;i++){
//         console.dir(t[i])
//     }
// }
function submitForm(a) {
    a.preventDefault()
    const t = a.target
    const res = {
        hobbies: []
    };
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type
        const vl = t[i].value
        const nm = t[i].value

        // console.log(nm,ty,vl)
        // if(ty=='checkbox'){
        //     console.log(t[i].checked)
        // }
        // if(ty!="submit"){
        //     res[nm]=vl
        // }
        if (ty != 'submit') {
            if (ty == 'checkbox' && t[i].checked)
                res.hobbies.push(vl)
            if (ty != 'checked') {
                res[nm] = vl
            }
        }
    }
    console.log(res)
}
