import express from 'express'

const router = express.Router() // eslint-disable-line new-cap

const users = [
  { id: '7dg0te6o9bylvxu9bmzt98jjor', name: 'Seedyee', email: 'seedyee@mail.com', password: 'aaaaaaa1' },
  { id: '9c2lz3zlxses168th4goav2t9', name: 'jundo', email: 'jundo@mail.com', password: 'aaaaaaa1' },
]

const basicInfo = {
  id: '7dg0te6o9bylvxu9bmzt98jjor',
  name: 'Seedyee',
  avatar: '../../../assets/logo.png',
  company: '跃考恩信息科技',
  address: '深圳',
  business: '互联网',
  position: '研发工程师',
  personal: '我是。。。。。。',
  timestamp: '2016-11-11',
  realName: '跃考恩',
  email: 'seedyee@mail.com',
  mobile: '13660072677',
  publicEmail: true,
  publicMobile: true,
}

const emails = [
  {
    emailId: '1',
    email: 'seedyee@mail.com',
    default: true,
    verified: true,
    public: true,
  },
  {
    emailId: '2',
    email: 'leapcorn@mail.com',
    default: false,
    verified: true,
    public: false,
  },
  {
    emailId: '3',
    email: 'vimniky@mail.com',
    default: false,
    verified: false,
    public: false,
  },
  {
    emailId: '4',
    email: 'chennan@leapcorn.com',
    default: false,
    verified: false,
    public: false,
  },
]

const mobiles = [
  {
    mobileId: '1',
    mobile: '13660072677',
    default: true,
    verified: true,
    public: true,
  },
  {
    mobileId: '2',
    mobile: '15766256651',
    default: false,
    verified: true,
    public: false,
  },
  {
    mobileId: '3',
    mobile: '18027822322',
    default: false,
    verified: false,
    public: false,
  },
]

const success = { code: '0', message: '请求成功' }


const id = Math.random().toString(36).substr(2);

router.post('/authc/signin', (req, res) => {
  const { principal, password } = req.body
  if (!(users.some(user => user.name === principal) || users.some(user => user.email === principal))) {
    res.json({ error: { text: '您输入用户名或邮箱不存在，请重新输入' } })
  } else if (!users.some(user => user.password === password)) {
    res.json({ error: { text: '您输入的密码错误，请重新输入 !' } })
  } else if (principal.indexOf('@') > 0) {
    const currentUser = users.find(user => user.email === principal)
    res.json(currentUser)
  } else {
    const currentUser = users.find(user => user.name === principal)
    res.json(currentUser)
  }
})

router.post('/accounts', (req, res) => {
  const { email, name, password } = req.body
  if (users.some(user => user.email === email)) {
    res.json({ error: { text: '用户名或邮箱已被使用，请重新输入 !' } })
  } else {
    users.push({ id, name, email, password })
    res.json({ id, name, email })
  }
})

router.post('/authc/signout', (req, res) => { res.json({}) })

/*
 * 查询用户信息
 */

router.get('/accounts/:id/basicInfo', (req, res) => { res.json(basicInfo) })
router.get('/accounts/:id/emails', (req, res) => { res.json(emails) })
router.get('/accounts/:id/mobiles', (req, res) => { res.json(mobiles) })

/*
 * 修改用户信息
 */

router.post('/accounts/:id/basicInfo', (req, res) => { res.json(success) })
router.post('/accounts/:id/password', (req, res) => { res.json(success) })
router.post('/accounts/:id/emails/:id', (req, res) => { res.json(success) })
router.post('/accounts/:id/mobiles/:id', (req, res) => { res.json(success) })

/*
 * 新增邮箱或手机
 */

router.post('/accounts/:id/emails', (req, res) => { res.json(success) })
router.post('/accounts/:id/mobiles', (req, res) => { res.json(success) })

/*
 * 删除邮箱或手机
 */

router.delete('/accounts/:id/emails/:id', (req, res) => { res.json(success) })
router.delete('/accounts/:id/mobiles/:id', (req, res) => { res.json(success) })

/*
 * 上传文件
 */

router.post('/upload/avatar', (req, res) => { res.json(success) })


/* -----------------------------------project api----------------------------------- */

const projects = [
  { id: '1', projectName: 'project1', isPublic: true },
  { id: '2', projectName: 'project2', isPublic: false },
  { id: '3', projectName: 'project3', isPublic: false },
]

const project = {
  id: '1',
  projectName: 'project1',
  describle: '第一个CDE项目',
  isPublic: true,
  members: ['陈先生', '罗先生', '李先生', '廖先生'],
}

const members = [
  { accountId: '1', principal: '陈先生' },
  { accountId: '2', principal: '罗先生' },
  { accountId: '3', principal: '李先生' },
  { accountId: '4', principal: '廖先生' },
]


// 查询所有项目
router.get('/accounts/projects/all ', (req, res) => { res.json(projects) })
// 查询创建项目
router.get('/accounts/projects/created ', (req, res) => { res.json(projects) })
// 查询参与的项目
router.get('/accounts/projects/joined ', (req, res) => { res.json(projects) })
// 查询关注的项目
router.get('/accounts/projects/watched ', (req, res) => { res.json(projects) })
// 查询收藏的项目
router.get('/accounts/projects/collect ', (req, res) => { res.json(projects) })
// 查询项目基本信息
router.get('/accounts/projects/:id ', (req, res) => { res.json(project) })
// 查询成员 or 搜索成员
router.get('/accounts/projects/members ', (req, res) => { res.json(members) })

// 创建项目
router.post('/accounts/projects/create', (req, res) => { res.json(success) })
// 更新项目
router.post('/accounts/projects/:id/update', (req, res) => { res.json(success) })
// 删除项目
router.delete('/accounts/projects/:id/delete', (req, res) => { res.json(success) })

// 添加项目成员
router.post('/projects/:id/members', (req, res) => { res.json(success) })
// 删除项目成员
router.delete('/projects/:id/members', (req, res) => { res.json(success) })

// 添加关注项目
router.post('accounts/projects/:id/watched', (req, res) => { res.json(success) })
// 删除关注醒目
router.delete('accounts/projects/:id/watched', (req, res) => { res.json(success) })

// 添加收藏项目
router.post('accounts/projects/:id/collect', (req, res) => { res.json(success) })
// 删除收藏醒目
router.delete('accounts/projects/{id}/collect', (req, res) => { res.json(success) })

export default router

