let arr=[]
let objName
let objPro
let objAge
let objId
let addUser=document.getElementsByClassName('add-btn')[0]
addUser.addEventListener('click',()=>{check()})
let inp=document.getElementsByClassName('top')
for(let i=0;i<inp.length;i++){
    
    let inp1=inp[i]
    inp1.addEventListener('input',()=>{rem(i,inp1)})    
}

function rem(index,values){
    let space=document.getElementsByClassName('alert')[0]
    space.innerText=""
    objId=arr.length+1
    if(index==0){
        objName=values.value
    }
    if(index==1){
        objPro=values.value
    }
    if(index==2){
        objAge=values.value
    }
}


function check(){
    let n=""
    let first=document.getElementsByClassName('top')[0].value
    let second=document.getElementsByClassName('top')[1].value
    let third=document.getElementsByClassName('top')[2].value
    if((first != n) && (second != n) && (third != n)){
        let ele=document.createElement('p')
        ele.innerText="Success : Employee Added !"
        ele.style.color='green'
        ele.style.marginTop='0'
        ele.style.paddingLeft='0'
        let parent=document.getElementsByClassName('alert')[0]
        parent.appendChild(ele)
        let obj={
            id :objId,
            name :objName,
            profession:objPro,
            age : objAge
        }
        arr.push(obj)
        console.log(arr)
    }
    else{
        let ele=document.createElement('p')
        ele.innerText="Error : Please make sure all the fields are filled before adding an employee !"
        ele.style.color='red'
        ele.style.marginTop='0'
        ele.style.paddingLeft='0'
        let parent=document.getElementsByClassName('alert')[0]
        parent.appendChild(ele)
    }
}
