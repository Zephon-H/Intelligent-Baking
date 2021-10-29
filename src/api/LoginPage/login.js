import {url} from '../main'
import axios from  'axios'
//登录请求  请求成功保存用户信息到localstorge
export function loginRequest(obj){
    let requestUrl=url+'/LoginPage/Login'
    console.log(requestUrl)
    let post={
        user:obj.userName,
        pwd:obj.password
    }
    let bool
    let user={
        id:'',
        gender:'',
        jurisdiction:'',
        name:'',
        nname:'',
        number:'',
    }
    axios.post(requestUrl,post).then((res)=>{
        console.log(res.data)
        res.data = res.data.data
        bool=res.data.identify
        user.id=res.data.user
        user.gender=res.data.gender
        user.jurisdiction=res.data.jurisdiction
        user.name=res.data.name
        user.nname=res.data.nname
        user.number=res.data.number
        localStorage.setItem('bdi_iot_token',res.data.token)
        localStorage.setItem('bdi_iot_user',JSON.stringify(user))
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
        console.log(bool)
        obj.login(bool)
    })
}