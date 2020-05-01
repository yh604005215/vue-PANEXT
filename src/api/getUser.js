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
export const getRegister = (email, password, eCode) => {
  return $axios({
    url: '/pnext/register',
    method: 'POST',
    data: {
      email,
      password,
      eCode,
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
