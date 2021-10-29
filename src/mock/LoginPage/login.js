import Mock from 'mockjs'
let params =  Mock.mock({ // 数据池
    "identify":"true",
    "user":"10010101",
    "gender":"M",
    "jurisdiction":"klasjdlkfasdf",
    "name":"姓名",
    "nname":"用户名",
    "number":"1",
    "token":"kjzxckjvqjwoierdslkflasdlfaooqrwe"
})

let token = Mock.mock({
    "identify":true,
})

export default {
    login: () => ({
        code: 200,
        data: params
    }),
    tokenCertify: () => ({
        code: 200,
        data: token,
    })
}