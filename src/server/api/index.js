import express from 'express'

const router = express.Router() // eslint-disable-line new-cap

const emailMap = {
  'seedyee@mail.com': 'aaaaaaa1',
  'jundo@mail.com': 'aaaaaaa1',
}

router.post('/login', (req, res) => {
  const { email, password } = req.body
  if (!emailMap[email]) {
    res.json({ error: { text: `${email} doesn't exisit !` } })
  } else if (emailMap[email] !== password) {
    res.json({ error: { text: 'password incorrect' } })
  } else {
    res.json({ email })
  }
})

router.post('/register', (req, res) => {
  const { email, password } = req.body
  if (emailMap[email]) {
    res.json({ error: { text: `${email} already exisits !` } })
  } else {
    emailMap[email] = password
    res.json({ email })
  }
})

router.get('/logout', (req, res) => {
  res.json({})
})

const user = {
  basicInformation: {
    id: '123456',
    usersname: '用户名',
    avatar: '用户头像',
    company: '所在公司',
    companyAddress: '公司地址',
    companyBusiness: '行业',
    posation: '职业',
    personal: '个人简介',
    registrationDate: '注册时间',
    realName: '用户真实姓名',
  },
  mobiles: [
    {
      id: '1',
      mobile: '13660072677',
      isDefault: 1,
      isVerified: 1,
      isPublic: 1,
    },
    {
      id: '2',
      mobile: '123456789110',
      isDefault: 0,
      isVerified: 0,
      isPublic: 0,
    },
  ],
  emails: [
    {
      id: '1',
      email: 'seedyee@mail.com',
      isDefault: 1,
      isVerified: 1,
      isPublic: 1,
    },
    {
      id: '2',
      email: 'vimniky@mail.com',
      isDefault: 0,
      isVerified: 0,
      isPublic: 0,
    },
  ],
}

router.get('/users/:id', (req, res) => {
  res.json(user)
})

router.post('/users/:id', (req, res) => {
  res.json(user)
})

router.post('/users/:id/email', (req, res) => {
  const { emails: [email] } = user
  res.json(email)
})

router.post('/users/:id/mobile', (req, res) => {
  const { mobiles: [mobile] } = user
  res.json(mobile)
})

export default router

