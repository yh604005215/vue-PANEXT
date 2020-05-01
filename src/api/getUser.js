import $axios from '@/utils/$axios'

/**
 * 获取邮箱验证码
 */
export const getEmailCode = (email) => {
  console.log(email)
  return $axios({
    url: '/pnext/emailCode',
    method: 'POST',
    data: {
      email,
      time: new Date().getTime()
    }
  })
}

/**
 * 注册
 */
export const getRegister = (info) => {
  return $axios({
    url: '/pnext/register',
    method: 'POST',
    data: {
      email: info.email,
      password: info.password,
      eCode: info.eCode,
      sex: info.sex,
      time: new Date().getTime()
    }
  })
}

/**
 * 登录
 */
export const getLogin = (email, password) => {
  return $axios({
    url: '/pnext/login',
    method: 'POST',
    data: {
      email,
      password
    }
  })
}
