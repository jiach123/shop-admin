import axios from '~/axios'

// 登录接口
export const login = (data = {}) => {
    return axios({
        url: '/admin/login',
        method: 'POST',
        data
    })
}

// export const login = (username,password) => {
   
//      return axios("/admin/login",{username,password})
// }