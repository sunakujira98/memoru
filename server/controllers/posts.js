import PostMesage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMesage.find()

    console.log(postMessages)

    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new PostMesage(post)

  try {
    await newPost.save()

    res.send(201).json(newPost)
  } catch (error) {
    res.send(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id')

  const updatePost = await PostMesage.findByIdAndUpdate(_id, post, {
    new: true,
  })

  res.json(updatePost)
}
