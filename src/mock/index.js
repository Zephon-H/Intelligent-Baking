// 保存模拟数据路径
import Mock from 'mockjs'
import login from './LoginPage/login'

Mock.mock(/\/LoginPage\/Login/,'post',login.login)
Mock.mock(/\/LoginPage\/TokenCertify/, 'get', login.tokenCertify)
// /LoginPage/Login