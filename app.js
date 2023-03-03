

const mongoose = require('Mongoose')
const dbURI = 'mongodb+srv://kboring1:Course2023@cluster0.lvrkoec.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbURI, {userNewUrlParser: true,useUnifiedTopology:true})
 .then((result)=> app.listen(3000))
 .catch((err)=> console.log(err))