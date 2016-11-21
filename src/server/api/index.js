import express from 'express'

const router = express.Router() // eslint-disable-line new-cap

const users = [
  { id: '7dg0te6o9bylvxu9bmzt98jjor', username: 'Seedyee', email: 'seedyee@mail.com', password: 'aaaaaaa1' },
  { id: '9c2lz3zlxses168th4goav2t9', username: 'jundo', email: 'jundo@mail.com', password: 'aaaaaaa1' },
]

const id = Math.random().toString(36).substr(2);

router.post('/login', (req, res) => {
  const { principal, password } = req.body
  if (!(users.some(user => user.username === principal) || users.some(user => user.email === principal))) {
    res.json({ error: { text: '您输入用户名或邮箱不存在，请重新输入' } })
  } else if (!users.some(user => user.password === password)) {
    res.json({ error: { text: '您输入的密码错误，请重新输入 !' } })
  } else {
    const currentUser = users.find(user => user.email === principal)
    res.json(currentUser)
  }
})

router.post('/register', (req, res) => {
  const { email, username, password } = req.body
  if (users.some(user => user.email === email)) {
    res.json({ error: { text: '用户名或邮箱已被使用，请重新输入 !' } })
  } else {
    users.push({ id, username, email, password })
    res.json({ id, username, email })
  }
})

router.get('/logout', (req, res) => {
  res.json({})
})

const basicInfo = {
  id: '7dg0te6o9bylvxu9bmzt98jjor',
  username: 'Seedyee',
  avatar: '用户头像',
  company: '跃考恩信息科技',
  companyAddress: '深圳',
  companyBusiness: '互联网',
  position: '研发工程师',
  personal: '我是。。。。。。',
  timestamp: '2016-11-11',
  realName: '跃考恩',
  email: 'seedyee@mail.com',
  mobile: '13660072677',
  isPublicEmail: true,
  isPublicMobile: true,
}

const emails = [
  {
    id: '1',
    email: 'seedyee@mail.com',
    isDefault: true,
    isVerified: true,
    isPublic: true,
  },
  {
    id: '2',
    email: 'leapcorn@mail.com',
    isDefault: false,
    isVerified: true,
    isPublic: false,
  },
  {
    id: '3',
    email: 'vimniky@mail.com',
    isDefault: false,
    isVerified: false,
    isPublic: false,
  },
]

const mobiles = [
  {
    id: '1',
    mobile: '13660072677',
    isDefault: true,
    isVerified: true,
    isPublic: true,
  },
  {
    id: '2',
    mobile: '15766256651',
    isDefault: false,
    isVerified: true,
    isPublic: false,
  },
  {
    id: '3',
    mobile: '18027822322',
    isDefault: false,
    isVerified: false,
    isPublic: false,
  },
]

const success = { error: null }

// 查询用户信息
router.get('/accounts/:id/basicInfo', (req, res) => {
  res.json(basicInfo)
})

router.get('/accounts/:id/emails', (req, res) => {
  res.json(emails)
})

router.get('/accounts/:id/mobiles', (req, res) => {
  res.json(mobiles)
})

// 修改用户信息
router.post('/accounts/:id/basicInfo', (req, res) => {
  res.json(success)
})

router.post('/accounts/:id/password', (req, res) => {
  res.json(success)
})

router.post('/accounts/:id/emails/:id', (req, res) => {
  res.json(success)
})

router.post('/accounts/:id/mobiles/:id', (req, res) => {
  res.json(success)
})

// 新增邮箱或手机
router.post('/accounts/:id/emails', (req, res) => {
  res.json(success)
})

router.post('/accounts/:id/mobiles', (req, res) => {
  res.json(success)
})

// 删除邮箱或手机
router.delete('/accounts/:id/emails/:id', (req, res) => {
  res.json(success)
})

router.delete('/accounts/:id/mobiles/:id', (req, res) => {
  res.json(success)
})


export default router

