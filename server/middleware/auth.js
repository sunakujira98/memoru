import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  try {
    const token = req.header.authorization.split('')[1]
    const ourOwnAuth = token.length < 500

    let decodedData

    if (token && ourOwnAuth) {
      decodedData = jwt.verify(token, 'test')

      req.userId = decodedData?.id
    } else {
      decodedData = jwt.decode(token)

      req.userId = decodedData?.sub
    }

    next()
  } catch (error) {
    console.log(error)
  }
}

export default auth
